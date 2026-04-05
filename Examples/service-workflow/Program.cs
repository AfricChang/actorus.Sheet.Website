using System.Linq;
using System.Net.Http.Json;
using AcTorus.Sheet;

string serviceBaseUrl = args.Length > 0 ? args[0] : "http://localhost:5211";

using HttpClient client = new()
{
    BaseAddress = new Uri(serviceBaseUrl, UriKind.Absolute)
};

ServiceMetadataResponse? metadata = await client.GetFromJsonAsync<ServiceMetadataResponse>("/metadata");
WorkbookEnvelopeResponse? createResponse = await PostAsync<WorkbookEnvelopeResponse>(
    client,
    "/workbooks/create",
    new CreateWorkbookRequest("Service"));

WorkbookContractResponse workbook = new(
    "Summary",
    [
        new WorksheetContractResponse(
            "Summary",
            null,
            [
                new CellContractResponse("A1", "Empty", "=SUM('Data 2026'!B1:B3)", null, null, null, null, null),
                new CellContractResponse("A2", "Empty", "=TEXTJOIN(\", \",1,'Data 2026'!A1:A3)", null, null, null, null, null)
            ]),
        new WorksheetContractResponse(
            "Data 2026",
            null,
            [
                new CellContractResponse("A1", "Text", null, "North", null, null, null, null),
                new CellContractResponse("A2", "Text", null, "South", null, null, null, null),
                new CellContractResponse("A3", "Text", null, "West", null, null, null, null),
                new CellContractResponse("B1", "Number", null, null, 10d, null, null, null),
                new CellContractResponse("B2", "Number", null, null, 20d, null, null, null),
                new CellContractResponse("B3", "Number", null, null, 12d, null, null, null)
            ])
    ]);

CalculateWorkbookResponse? calculateResponse = await PostAsync<CalculateWorkbookResponse>(
    client,
    "/workbooks/calculate",
    new CalculateWorkbookRequest(workbook, new CalculationOptions()));

SaveWorkbookResponse? saveResponse = await PostAsync<SaveWorkbookResponse>(
    client,
    "/workbooks/save",
    new SaveWorkbookRequest(calculateResponse!.Workbook, new WorkbookSaveOptions()));

WorkbookEnvelopeResponse? openResponse = await PostAsync<WorkbookEnvelopeResponse>(
    client,
    "/workbooks/open",
    new OpenWorkbookRequest(saveResponse!.PackageBase64, new WorkbookOpenOptions { RecalculateOnOpen = true }));

BatchCalculateWorkbookResponse? batchResponse = await PostAsync<BatchCalculateWorkbookResponse>(
    client,
    "/workbooks/batch-calculate",
    new BatchCalculateWorkbookRequest(
        [
            new WorkbookContractResponse(
                "BatchOne",
                [
                    new WorksheetContractResponse(
                        "BatchOne",
                        null,
                        [
                            new CellContractResponse("A1", "Number", null, null, 10d, null, null, null),
                            new CellContractResponse("B1", "Number", null, null, 32d, null, null, null),
                            new CellContractResponse("C1", "Empty", "=SUM(A1:B1)", null, null, null, null, null)
                        ])
                ]),
            new WorkbookContractResponse(
                "BatchTwo",
                [
                    new WorksheetContractResponse(
                        "BatchTwo",
                        null,
                        [
                            new CellContractResponse("A1", "Number", null, null, 3d, null, null, null),
                            new CellContractResponse("B1", "Number", null, null, 4d, null, null, null),
                            new CellContractResponse("C1", "Empty", "=SUM(A1:B1)", null, null, null, null, null)
                        ])
                ])
        ],
        new CalculationOptions()));

WorksheetContractResponse reopenedSummary = openResponse!.Workbook.Worksheets.Single(worksheet => worksheet.Name == "Summary");
CellContractResponse reopenedTotalCell = reopenedSummary.Cells.Single(cell => cell.Address == "A1");
CellContractResponse reopenedRegionsCell = reopenedSummary.Cells.Single(cell => cell.Address == "A2");

Console.WriteLine($"Service URL: {client.BaseAddress}");
Console.WriteLine($"Metadata session mode: {metadata?.SessionMode}");
Console.WriteLine($"Created worksheet: {createResponse?.Workbook.ActiveWorksheetName}");
Console.WriteLine($"Service note: {metadata?.Notes}");
Console.WriteLine($"Single-workbook session mode: {calculateResponse.SessionMode}");
Console.WriteLine($"Reopened total formula: {reopenedTotalCell.Formula}");
Console.WriteLine($"Returned total: {reopenedTotalCell.Number}");
Console.WriteLine($"Returned regions: {reopenedRegionsCell.Text}");
Console.WriteLine($"Batch results: {string.Join(", ", batchResponse!.Results.Select(result => result.Workbook.Worksheets[0].Cells.Single(cell => cell.Address == "C1").Number))}");
Console.WriteLine($"Saved package bytes: {saveResponse.ByteCount}");

static async Task<T?> PostAsync<T>(HttpClient client, string path, object payload)
{
    using HttpResponseMessage response = await client.PostAsJsonAsync(path, payload);
    response.EnsureSuccessStatusCode();
    return await response.Content.ReadFromJsonAsync<T>();
}

internal sealed record CreateWorkbookRequest(string ActiveWorksheetName);
internal sealed record OpenWorkbookRequest(string PackageBase64, WorkbookOpenOptions Options);
internal sealed record CalculateWorkbookRequest(WorkbookContractResponse Workbook, CalculationOptions Options);
internal sealed record BatchCalculateWorkbookRequest(List<WorkbookContractResponse> Workbooks, CalculationOptions Options);
internal sealed record SaveWorkbookRequest(WorkbookContractResponse Workbook, WorkbookSaveOptions Options);
internal sealed record ServiceMetadataResponse(
    string Sdk,
    string Host,
    string State,
    string SessionMode,
    double RequestTimeoutSeconds,
    int MaxRequestBodyBytes,
    int MaxWorksheetCount,
    int MaxWorkbookCells,
    string Notes);
internal sealed record WorkbookEnvelopeResponse(string SessionMode, WorkbookContractResponse Workbook);
internal sealed record SaveWorkbookResponse(string SessionMode, string PackageBase64, int ByteCount);
internal sealed record CalculateWorkbookResponse(string SessionMode, WorkbookContractResponse Workbook, CalculationResult Result);
internal sealed record BatchCalculateWorkbookResponse(string SessionMode, List<BatchCalculateWorkbookItem> Results);
internal sealed record BatchCalculateWorkbookItem(WorkbookContractResponse Workbook, CalculationResult Result);
internal sealed record WorkbookContractResponse(string ActiveWorksheetName, List<WorksheetContractResponse> Worksheets);
internal sealed record WorksheetContractResponse(string Name, string? UsedRangeAddress, List<CellContractResponse> Cells);
internal sealed record CellContractResponse(
    string Address,
    string Kind,
    string? Formula,
    string? Text,
    double? Number,
    bool? Boolean,
    DateTime? DateTime,
    string? Error);

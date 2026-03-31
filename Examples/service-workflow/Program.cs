using System.Net.Http.Json;
using AcTorus.Sheet;

string serviceBaseUrl = args.Length > 0 ? args[0] : "http://localhost:5211";

using HttpClient client = new()
{
    BaseAddress = new Uri(serviceBaseUrl, UriKind.Absolute)
};

WorkbookContractResponse workbook = new(
    "Service",
    [
        new WorksheetContractResponse(
            "Service",
            null,
            [
                new CellContractResponse("A1", "Number", null, null, 10d, null, null, null),
                new CellContractResponse("B1", "Number", null, null, 32d, null, null, null),
                new CellContractResponse("C1", "Empty", "=SUM(A1:B1)", null, null, null, null, null)
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

CellContractResponse reopenedFormulaCell = openResponse!.Workbook.Worksheets[0].Cells.Single(cell => cell.Address == "C1");

Console.WriteLine($"Service URL: {client.BaseAddress}");
Console.WriteLine($"Session mode: {calculateResponse.SessionMode}");
Console.WriteLine($"Formula: {reopenedFormulaCell.Formula}");
Console.WriteLine($"Returned number: {reopenedFormulaCell.Number}");
Console.WriteLine($"Saved package bytes: {saveResponse.ByteCount}");

static async Task<T?> PostAsync<T>(HttpClient client, string path, object payload)
{
    using HttpResponseMessage response = await client.PostAsJsonAsync(path, payload);
    response.EnsureSuccessStatusCode();
    return await response.Content.ReadFromJsonAsync<T>();
}

internal sealed record OpenWorkbookRequest(string PackageBase64, WorkbookOpenOptions Options);
internal sealed record CalculateWorkbookRequest(WorkbookContractResponse Workbook, CalculationOptions Options);
internal sealed record SaveWorkbookRequest(WorkbookContractResponse Workbook, WorkbookSaveOptions Options);
internal sealed record WorkbookEnvelopeResponse(string SessionMode, WorkbookContractResponse Workbook);
internal sealed record SaveWorkbookResponse(string SessionMode, string PackageBase64, int ByteCount);
internal sealed record CalculateWorkbookResponse(string SessionMode, WorkbookContractResponse Workbook, CalculationResult Result);
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

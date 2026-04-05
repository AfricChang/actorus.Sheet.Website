using AcTorus.Sheet;

SheetRuntime runtime = new();
byte[] payload;
int recalculatedCellCount;

using (IWorkbookSession session = runtime.CreateSession())
{
    IWorkbookDocument workbook = session.CreateWorkbook("Report");
    IWorksheet report = workbook.ActiveWorksheet;
    IWorksheet data = workbook.AddWorksheet("Data");

    workbook.SetProtection(new WorkbookProtection
    {
        LockStructure = true
    });

    report.GetRange("A1").Value = CellValue.FromText("Quarterly margin report");
    report.GetRange("A3").Value = CellValue.FromText("Total revenue");
    report.GetRange("B3").Formula = "=SUM(Data!B2:B4)";
    report.GetRange("A4").Value = CellValue.FromText("Total cost");
    report.GetRange("B4").Formula = "=SUM(Data!C2:C4)";
    report.GetRange("A5").Value = CellValue.FromText("Total margin");
    report.GetRange("B5").Formula = "=B3-B4";
    report.GetRange("B5").NumberFormatCode = "#,##0";
    report.GetRange("A6").Value = CellValue.FromText("Status");
    report.GetRange("B6").Formula = "=IF(B5>=100000,\"ready\",\"review\")";

    report.SetHyperlink("A1", "https://example.com/reporting-pipeline");
    report.SetComment("B5", "Keep margin above 100000 before publishing.", "Ops");
    report.SetProtection(new WorksheetProtection
    {
        ProtectContents = true,
        ProtectObjects = true,
        AllowFiltering = true,
        AllowSorting = true,
        SelectLockedCells = false,
        SelectUnlockedCells = true
    });
    report.SetPageSetup(new WorksheetPageSetup
    {
        Orientation = WorksheetPageOrientation.Landscape,
        PaperSize = WorksheetPaperSize.A4,
        FitToWidth = 1,
        FitToHeight = 1,
        PrintArea = RangeAddress.Parse("A1:B6"),
        PrintTitles = new WorksheetPrintTitles
        {
            RepeatRowStart = 1,
            RepeatRowEnd = 2
        },
        HeaderFooter = new WorksheetHeaderFooter
        {
            OddHeader = "&LQuarterly margin report",
            OddFooter = "&RPage &P"
        }
    });

    data.GetRange("A1").Value = CellValue.FromText("Region");
    data.GetRange("B1").Value = CellValue.FromText("Revenue");
    data.GetRange("C1").Value = CellValue.FromText("Cost");
    data.GetRange("A2").Value = CellValue.FromText("North");
    data.GetRange("B2").Value = CellValue.FromNumber(128000);
    data.GetRange("C2").Value = CellValue.FromNumber(96000);
    data.GetRange("A3").Value = CellValue.FromText("South");
    data.GetRange("B3").Value = CellValue.FromNumber(104000);
    data.GetRange("C3").Value = CellValue.FromNumber(76000);
    data.GetRange("A4").Value = CellValue.FromText("West");
    data.GetRange("B4").Value = CellValue.FromNumber(149000);
    data.GetRange("C4").Value = CellValue.FromNumber(109000);

    data.SetAutoFilter(new WorksheetAutoFilter(
        RangeAddress.Parse("A1:C4"),
        [
            new WorksheetFilterColumn(0, ["North", "South", "West"])
        ],
        new WorksheetSortState(
            RangeAddress.Parse("A2:C4"),
            [
                new WorksheetSortCondition(RangeAddress.Parse("B2:B4"), descending: true)
            ])));

    data.AddConditionalFormat(new WorksheetConditionalFormat(
        RangeAddress.Parse("B2:B4"),
        [
            new WorksheetConditionalFormatRule(
                WorksheetConditionalFormatRuleType.CellIs,
                ["120000"],
                new WorksheetDifferentialFormat { Bold = true },
                WorksheetConditionalFormatOperator.GreaterThan)
        ]));

    CalculationResult calculation = workbook.Calculate();
    recalculatedCellCount = calculation.RecalculatedCellCount;
    payload = workbook.Save();
}

using IWorkbookSession reopenedSession = runtime.CreateSession();
IWorkbookDocument reopened = reopenedSession.OpenWorkbook(payload, new WorkbookOpenOptions { RecalculateOnOpen = true });
IWorksheet reportAfterRoundTrip = reopened.GetWorksheet("Report");
IWorksheet dataAfterRoundTrip = reopened.GetWorksheet("Data");
WorksheetPrintTitles? printTitles = reportAfterRoundTrip.PageSetup?.PrintTitles;
string printTitleRows = printTitles is null
    ? "n/a"
    : $"{printTitles.RepeatRowStart}:{printTitles.RepeatRowEnd}";

Console.WriteLine("Workload: reporting builder + metadata-preserving workbook pipeline");
Console.WriteLine($"Rows recalculated: {recalculatedCellCount}");
Console.WriteLine($"Total margin: {reportAfterRoundTrip.GetRange("B5").Text}");
Console.WriteLine($"Status: {reportAfterRoundTrip.GetRange("B6").Text}");
Console.WriteLine($"Workbook structure locked: {reopened.Protection?.LockStructure ?? false}");
Console.WriteLine($"Worksheet protected: {reportAfterRoundTrip.Protection?.ProtectContents ?? false}");
Console.WriteLine($"Print area: {reportAfterRoundTrip.PageSetup?.PrintArea}");
Console.WriteLine($"Print title rows: {printTitleRows}");
Console.WriteLine($"Header text: {reportAfterRoundTrip.PageSetup?.HeaderFooter?.OddHeader ?? "n/a"}");
Console.WriteLine($"Hyperlink target: {reportAfterRoundTrip.GetHyperlink("A1")?.Target ?? "n/a"}");
Console.WriteLine($"Comment author: {reportAfterRoundTrip.GetComment("B5")?.Author ?? "n/a"}");
Console.WriteLine($"Auto-filter range: {dataAfterRoundTrip.AutoFilter?.Range}");
Console.WriteLine($"Conditional-format collections: {dataAfterRoundTrip.ConditionalFormats.Count}");
Console.WriteLine($"Saved package bytes: {payload.Length}");

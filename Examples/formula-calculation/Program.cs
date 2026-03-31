using AcTorus.Sheet;

SheetRuntime runtime = new();
using IWorkbookSession session = runtime.CreateSession();

IWorkbookDocument workbook = session.CreateWorkbook("Summary");
IWorksheet summary = workbook.ActiveWorksheet;
IWorksheet data = workbook.AddWorksheet("Data 2026");

data.GetRange("A1").Value = CellValue.FromText("North");
data.GetRange("A2").Value = CellValue.FromText("South");
data.GetRange("A3").Value = CellValue.FromText("West");
data.GetRange("B1").Value = CellValue.FromNumber(10);
data.GetRange("B2").Value = CellValue.FromNumber(20);
data.GetRange("B3").Value = CellValue.FromNumber(12);

workbook.DefineName("Sales", data.Name, "B1:B3");

summary.GetRange("A1").Formula = "=SUM(Sales)";
summary.GetRange("A2").Formula = "=COUNT(Sales)";
summary.GetRange("A3").Formula = "=AVERAGE(Sales)";
summary.GetRange("A4").Formula = "=SUM('Data 2026'!B1:B3)";
summary.GetRange("A5").Formula = "=CONCAT(\"rows:\",A2)";
summary.GetRange("A6").Formula = "=IF(A1>40,\"target\",\"hold\")";

CalculationResult result = workbook.Calculate();

Console.WriteLine($"Recalculated cells: {result.RecalculatedCellCount}");
Console.WriteLine($"Named range total: {summary.GetRange("A1").Text}");
Console.WriteLine($"Value count: {summary.GetRange("A2").Text}");
Console.WriteLine($"Average value: {summary.GetRange("A3").Text}");
Console.WriteLine($"Cross-sheet total: {summary.GetRange("A4").Text}");
Console.WriteLine($"Text result: {summary.GetRange("A5").Text}");
Console.WriteLine($"Decision: {summary.GetRange("A6").Text}");

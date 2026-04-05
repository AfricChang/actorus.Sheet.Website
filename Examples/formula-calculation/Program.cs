using AcTorus.Sheet;

SheetRuntime runtime = new();
using IWorkbookSession session = runtime.CreateSession();

IWorkbookDocument workbook = session.CreateWorkbook("Summary");
IWorksheet summary = workbook.ActiveWorksheet;
IWorksheet data = workbook.AddWorksheet("Data");
IWorksheet calendar = workbook.AddWorksheet("Calendar");

workbook.DefineName("Demand", data.Name, "B2:B5");
workbook.DefineName("Weights", data.Name, "C2:C5");

data.GetRange("A1").Value = CellValue.FromText("Region");
data.GetRange("B1").Value = CellValue.FromText("Demand");
data.GetRange("C1").Value = CellValue.FromText("Weight");
data.GetRange("A2").Value = CellValue.FromText("East");
data.GetRange("B2").Value = CellValue.FromNumber(120);
data.GetRange("C2").Value = CellValue.FromNumber(1.0d);
data.GetRange("A3").Value = CellValue.FromText("West");
data.GetRange("B3").Value = CellValue.FromNumber(95);
data.GetRange("C3").Value = CellValue.FromNumber(0.8d);
data.GetRange("A4").Value = CellValue.FromText("North");
data.GetRange("B4").Value = CellValue.FromNumber(110);
data.GetRange("C4").Value = CellValue.FromNumber(1.1d);
data.GetRange("A5").Value = CellValue.FromText("South");
data.GetRange("B5").Value = CellValue.FromNumber(130);
data.GetRange("C5").Value = CellValue.FromNumber(0.9d);

calendar.GetRange("A1").Value = CellValue.FromDateTime(new DateTime(2026, 4, 1));
calendar.GetRange("A2").Value = CellValue.FromDateTime(new DateTime(2026, 4, 30));
calendar.GetRange("A3").Value = CellValue.FromDateTime(new DateTime(2026, 4, 3));
calendar.GetRange("A4").Value = CellValue.FromDateTime(new DateTime(2026, 4, 10));
calendar.GetRange("B1").Value = CellValue.FromNumber(0);
calendar.GetRange("B2").Value = CellValue.FromNumber(10);
calendar.GetRange("B3").Value = CellValue.FromNumber(5000);

summary.GetRange("A1").Value = CellValue.FromText("Total demand");
summary.GetRange("B1").Formula = "=SUM(Demand)";
summary.GetRange("A2").Value = CellValue.FromText("Weighted demand");
summary.GetRange("B2").Formula = "=SUMPRODUCT(Demand,Weights)";
summary.GetRange("A3").Value = CellValue.FromText("Regions");
summary.GetRange("B3").Formula = "=TEXTJOIN(\", \",1,Data!A2:A5)";
summary.GetRange("A4").Value = CellValue.FromText("Working days");
summary.GetRange("B4").Formula = "=NETWORKDAYS(Calendar!A1,Calendar!A2,Calendar!A3:A4)";
summary.GetRange("A5").Value = CellValue.FromText("Monthly plan");
summary.GetRange("B5").Formula = "=PMT(Calendar!B1,Calendar!B2,Calendar!B3)";
summary.GetRange("B5").NumberFormatCode = "0.00";
summary.GetRange("A6").Value = CellValue.FromText("Status");
summary.GetRange("B6").Formula = "=IF(B2>=430,\"ready\",\"review\")";

CalculationResult result = workbook.Calculate();

Console.WriteLine($"Recalculated cells: {result.RecalculatedCellCount}");
Console.WriteLine($"Named range total: {summary.GetRange("B1").Text}");
Console.WriteLine($"Weighted demand: {summary.GetRange("B2").Text}");
Console.WriteLine($"Cross-sheet text: {summary.GetRange("B3").Text}");
Console.WriteLine($"Working days: {summary.GetRange("B4").Text}");
Console.WriteLine($"Monthly plan: {summary.GetRange("B5").Text}");
Console.WriteLine($"Decision: {summary.GetRange("B6").Text}");

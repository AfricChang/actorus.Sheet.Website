using AcTorus.Sheet;

SheetRuntime runtime = new();
using IWorkbookSession session = runtime.CreateSession();

// Replace CreateWorkbook with OpenWorkbook(...) when your flow starts from an existing template.
IWorkbookDocument workbook = session.CreateWorkbook("Orders");
IWorksheet worksheet = workbook.ActiveWorksheet;

worksheet.GetRange("A1").Value = CellValue.FromText("Region");
worksheet.GetRange("B1").Value = CellValue.FromText("Revenue");
worksheet.GetRange("C1").Value = CellValue.FromText("Cost");
worksheet.GetRange("D1").Value = CellValue.FromText("Margin");

worksheet.GetRange("A2").Value = CellValue.FromText("North");
worksheet.GetRange("B2").Value = CellValue.FromNumber(128000);
worksheet.GetRange("C2").Value = CellValue.FromNumber(96000);
worksheet.GetRange("D2").Formula = "=B2-C2";

worksheet.GetRange("A3").Value = CellValue.FromText("South");
worksheet.GetRange("B3").Value = CellValue.FromNumber(104000);
worksheet.GetRange("C3").Value = CellValue.FromNumber(76000);
worksheet.GetRange("D3").Formula = "=B3-C3";

worksheet.GetRange("A4").Value = CellValue.FromText("West");
worksheet.GetRange("B4").Value = CellValue.FromNumber(149000);
worksheet.GetRange("C4").Value = CellValue.FromNumber(109000);
worksheet.GetRange("D4").Formula = "=B4-C4";

worksheet.GetRange("C6").Value = CellValue.FromText("Total margin");
worksheet.GetRange("D6").Formula = "=SUM(D2:D4)";

CalculationResult calculation = workbook.Calculate();
byte[] packageBytes = workbook.Save();

Console.WriteLine($"Active worksheet: {worksheet.Name}");
Console.WriteLine($"Used range: {worksheet.UsedRangeAddress}");
Console.WriteLine($"Rows recalculated: {calculation.RecalculatedCellCount}");
Console.WriteLine($"D2 margin: {worksheet.GetRange("D2").Text}");
Console.WriteLine($"D6 total margin: {worksheet.GetRange("D6").Text}");
Console.WriteLine($"Saved package bytes: {packageBytes.Length}");

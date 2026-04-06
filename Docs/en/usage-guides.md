---
title: "Usage Guides"
description: "Common integration patterns and code examples."
summary: "Use AcTorus.Sheet for report generation, batch workbook jobs, backend recalculation, and application integration."
category: guides
order: 50
---

## Report generation

Start from a template or create a workbook in code, write business data, calculate formulas, and save for delivery.

```csharp
using AcTorus.Sheet;

SheetRuntime runtime = new();
using IWorkbookSession session = runtime.CreateSession();
IWorkbookDocument workbook = session.CreateWorkbook("Budget");
IWorksheet sheet = workbook.ActiveWorksheet;

sheet.GetRange("A1").Value = CellValue.FromText("Item");
sheet.GetRange("B1").Value = CellValue.FromText("Amount");
sheet.GetRange("A2").Value = CellValue.FromText("Hosting");
sheet.GetRange("B2").Value = CellValue.FromNumber(1200d);
sheet.GetRange("A3").Value = CellValue.FromText("Total");
sheet.GetRange("B3").Formula = "=SUM(B2:B2)";

workbook.Calculate();
byte[] payload = workbook.Save();
```

## Cross-worksheet formulas and named ranges

```csharp
IWorksheet summary = workbook.ActiveWorksheet;
IWorksheet data = workbook.AddWorksheet("Data");

data.GetRange("B1").Value = CellValue.FromNumber(12d);
data.GetRange("B2").Value = CellValue.FromNumber(18d);
data.GetRange("B3").Value = CellValue.FromNumber(20d);

// Cross-sheet formula
summary.GetRange("A1").Formula = "=SUM(Data!B1:B3)";

// Named range
workbook.DefineName("Sales", data.Name, "B1:B3");
summary.GetRange("A2").Formula = "=AVERAGE(Sales)";

workbook.Calculate();
```

## Open an existing workbook and process it

```csharp
byte[] input = File.ReadAllBytes("template.xlsx");

SheetRuntime runtime = new();
using IWorkbookSession session = runtime.CreateSession();
IWorkbookDocument workbook = session.OpenWorkbook(
    input,
    new WorkbookOpenOptions { RecalculateOnOpen = true });

IWorksheet sheet = workbook.ActiveWorksheet;
sheet.GetRange("B2").Value = CellValue.FromNumber(99000d);

workbook.Calculate();
File.WriteAllBytes("output.xlsx", workbook.Save());
```

## Save and reopen to verify

```csharp
byte[] payload = workbook.Save(new WorkbookSaveOptions
{
    RecalculateBeforeSave = true
});

using IWorkbookSession reopenedSession = runtime.CreateSession();
IWorkbookDocument reopened = reopenedSession.OpenWorkbook(
    payload,
    new WorkbookOpenOptions { RecalculateOnOpen = true });

string result = reopened.ActiveWorksheet.GetRange("B3").Text;
```

## Batch workbook processing

Use the engine in scheduled jobs or internal processing pipelines when many workbooks need the same repeated handling. Create one `SheetRuntime` at startup and create a new session per workbook or per request.

## Backend service integration

Keep workbook-processing logic in dedicated service classes rather than scattering `GetRange` calls through controllers or handlers:

```csharp
public class WorkbookReportService
{
    private readonly SheetRuntime _runtime = new();

    public byte[] GenerateReport(ReportData data)
    {
        using IWorkbookSession session = _runtime.CreateSession();
        IWorkbookDocument workbook = session.CreateWorkbook("Report");
        // ... fill data, calculate, save
        return workbook.Save();
    }
}
```

## Evaluation checklist

Before formal adoption, confirm:

1. every required formula is in the [Formula Support](formula-support) list
2. every required file feature is in [Workbook Features](workbook-features)
3. the workload does not require UI, charts, macros, encryption, or external refs
4. the workload is `.xlsx`-first

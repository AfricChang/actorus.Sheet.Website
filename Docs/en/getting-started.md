---
title: "Getting Started"
description: "A short path from first read to first workbook workflow."
summary: "Learn what AcTorus.Sheet is for, how to install it, and how to run your first .xlsx automation flow."
category: gettingStarted
order: 10
---

## What AcTorus.Sheet is for

AcTorus.Sheet is a headless `.NET` spreadsheet engine for teams that need to work with `.xlsx` files in applications and backend workflows — not a desktop editor or UI control.

It is built for tasks such as:

- opening workbook files or creating new ones
- reading and writing worksheet data
- calculating formulas server-side
- saving processed workbook results as `.xlsx`

## Requirements

- `.NET 8` or `.NET 9`
- a project that can reference a NuGet package

## Installation

The current version is distributed via GitHub Releases. NuGet.org publishing is planned for a future release.

**Step 1 — Download the package**

Go to the [Releases page](https://github.com/AfricChang/actorus.Sheet.Website/releases) and download `AcTorus.Sheet.0.1.0.nupkg`.

**Step 2 — Add a local NuGet source**

```bash
# Add the folder containing the .nupkg as a local source
dotnet nuget add source /path/to/folder --name actorus-local
```

**Step 3 — Add the package to your project**

```bash
dotnet add package AcTorus.Sheet --version 0.1.0
```

## Minimal example

```csharp
using AcTorus.Sheet;

SheetRuntime runtime = new();

using IWorkbookSession session = runtime.CreateSession();
IWorkbookDocument workbook = session.CreateWorkbook("Report");
IWorksheet sheet = workbook.ActiveWorksheet;

sheet.GetRange("A1").Value = CellValue.FromText("Revenue");
sheet.GetRange("B1").Value = CellValue.FromNumber(120d);
sheet.GetRange("A2").Value = CellValue.FromText("Cost");
sheet.GetRange("B2").Value = CellValue.FromNumber(45d);
sheet.GetRange("A3").Value = CellValue.FromText("Profit");
sheet.GetRange("B3").Formula = "=B1-B2";

CalculationResult result = workbook.Calculate();
byte[] payload = workbook.Save();
```

## Open an existing `.xlsx`

```csharp
using AcTorus.Sheet;

byte[] payload = File.ReadAllBytes("input.xlsx");

SheetRuntime runtime = new();
using IWorkbookSession session = runtime.CreateSession();
IWorkbookDocument workbook = session.OpenWorkbook(
    payload,
    new WorkbookOpenOptions { RecalculateOnOpen = true });

workbook.Calculate();
File.WriteAllBytes("output.xlsx", workbook.Save());
```

## Suggested reading order

1. `Feature Overview` — what the engine covers
2. `Formula Support` — the full list of supported functions
3. `Workbook Features` — file-feature boundaries
4. `Limitations` — what is explicitly out of scope
5. `Usage Guides` — common integration patterns
6. `FAQ` — quick answers

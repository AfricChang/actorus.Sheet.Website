# Workbook Processing Example

Shows a complete end-to-end workbook flow: create, write data, calculate, save to `.xlsx`, then reopen and verify.

## What it covers

- creating a workbook and writing cell values and formulas
- calculating formulas with `Calculate()`
- setting a freeze pane and adding data validation
- saving the workbook to a byte array with `Save()`
- reopening the saved workbook with `OpenWorkbook()` and reading back results

## How to run

```bash
dotnet run
```

No external dependencies. The example runs entirely in memory and prints results to the console.

## Typical use cases

Report generation, template filling, and automated workbook export — this is usually the first flow to validate when integrating the engine.

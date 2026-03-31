# Workbook Processing Example

This example shows a compact workbook-processing flow:

- create a workbook
- write business data into cells
- calculate formulas
- save the workbook as `.xlsx`

## What to look for

- `SheetRuntime` and `CreateSession()` establish the runtime entrypoint
- `CreateWorkbook("Orders")` creates a new workbook for the workflow
- cell values and formulas are written through familiar A1 addresses
- `Calculate()` refreshes the formula cells before output
- `Save()` produces the final workbook package bytes

## Typical use

This pattern fits report generation, template filling, and automated workbook export jobs.

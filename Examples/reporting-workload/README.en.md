# Reporting Workload Example

Shows a realistic report generation flow with formula calculation and workbook metadata that survives a save/reopen round-trip.

## What it covers

- building a report workbook with cross-sheet formulas and recalculation
- hyperlinks, comments, and worksheet/workbook protection
- page setup: print area, print titles, header and footer
- auto-filter with sort state
- conditional formatting
- saving and reopening the workbook to verify metadata is preserved

## How to run

```bash
dotnet run
```

No external dependencies. The example runs entirely in memory and prints results to the console.

## Typical use cases

Automated report generation where the output file needs to be ready for direct use — correct formulas, proper print layout, and preserved structure.

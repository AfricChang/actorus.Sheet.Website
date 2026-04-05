# Service Workflow Example

Shows how to call an AcTorus.Sheet service host from a .NET HTTP client.

## What it covers

- reading service metadata from the `/metadata` endpoint
- creating a workbook via `/workbooks/create`
- sending a workbook contract to `/workbooks/calculate` for server-side formula calculation
- running a batch calculation via `/workbooks/batch-calculate`
- saving the result via `/workbooks/save`
- reopening the saved workbook via `/workbooks/open` with recalculation enabled
- reading formula results from the returned workbook contract

## Prerequisite

A running AcTorus.Sheet service host is required. Pass its base URL as the first argument:

```bash
dotnet run -- http://localhost:5211
```

If no argument is provided, the example defaults to `http://localhost:5211`.

## Typical use cases

Backend APIs, internal workflow services, and queued workbook-processing jobs where the engine runs as a hosted service rather than an embedded library.

# Service Workflow Example

This example shows the service-side story from a client point of view.

## Flow

- send workbook content to the hosted calculation endpoint
- save the returned workbook payload
- open it again with recalculation-on-open enabled
- read the final formula result from the returned workbook contract

## Typical use

This pattern fits backend APIs, internal workflow services, queued jobs, and other hosted workbook-processing pipelines.

## Prerequisite

Run a compatible `AcTorus.Sheet` service host first, then pass its base URL to the example when needed.

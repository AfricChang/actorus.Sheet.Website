---
title: "Feature Overview"
description: "A user-facing overview of the core product capabilities."
summary: "See the major product areas: workbook handling, formulas, file features, and .NET integration."
category: features
order: 20
---

## What AcTorus.Sheet covers

AcTorus.Sheet is a headless `.NET` spreadsheet engine. It focuses on four practical areas.

## Workbook handling

- create new workbooks
- open existing `.xlsx` files
- read and write worksheet data using A1 or coordinate-based addressing
- save updated workbooks as `.xlsx`
- used-range tracking

## Formula calculation

- 298 documented public function names across all major formula families
- cross-sheet formula references
- defined names (named ranges)
- workbook recalculation on demand or on open/save
- see [Formula Support](formula-support) for the complete function list

## Workbook file features

- workbook and worksheet structure management
- merged cells, freeze panes
- styles and number format codes
- data validation (bounded subset)
- comments and hyperlinks
- page setup, print area, print titles, header and footer
- auto-filter and sort-state metadata
- worksheet and workbook protection metadata
- conditional formatting (narrow subset: `cellIs`, `expression`)

For boundary details on each feature, see [Workbook Features](workbook-features).

## .NET integration

- embed directly in `.NET 8` or `.NET 9` application code
- use in backend jobs, scheduled tasks, and service-side workflows
- no dependency on desktop spreadsheet software or Office interop

## Who this fits

Strong fit for teams that need spreadsheet logic inside software — report generation, batch processing, server-side recalculation, and workbook pipeline automation.

Not a fit for teams looking for a desktop editor, a browser spreadsheet control, or a rendering suite.

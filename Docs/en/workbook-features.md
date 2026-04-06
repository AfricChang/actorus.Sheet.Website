---
title: "Workbook Features"
description: "The current public .xlsx file-feature surface and its boundaries."
summary: "AcTorus.Sheet supports a documented subset of workbook and worksheet features. Each area notes whether it is full support, a bounded subset, or round-trip only."
category: workbook
order: 40
---

## Core workbook capabilities

- create new workbooks
- open existing `.xlsx` files
- read and write worksheet data
- save updated `.xlsx` files
- used-range tracking
- A1 and coordinate-based range access

## Structure

- workbook-level named ranges
- cross-worksheet references
- worksheet collection management (add, get, activate)
- merged ranges
- freeze panes

## Styles and presentation

- basic style round-trip
- number format codes
- selected basic style properties (e.g. bold)

## Validation, filtering, and sorting

- data validation — bounded subset
- worksheet auto-filter metadata — bounded subset
- sort-state metadata — bounded subset

> The public promise here is metadata persistence and round-trip. Interactive execution behavior is not part of the current scope.

## Comments, hyperlinks, and page metadata

- comments
- hyperlinks
- page setup — bounded subset
- header and footer — bounded subset
- single print area
- repeated print titles

## Protection metadata

- worksheet protection metadata
- workbook protection metadata

> Password-workflow productization and encrypted package support are not part of the current public scope.

## Conditional formatting

- `cellIs` rules
- `expression` rules
- bounded differential-format payload

> Icon sets, color scales, and data bars are not part of the current public scope.

## Packaging

- `.xlsx`-first
- bounded unknown-part and relationship preservation
- package diagnostics

## Explicitly out of scope

- charts, shapes, chart sheets
- rendering or print rendering
- desktop designer or UI
- `xls`, `xlsm`, `xlsb`, `ods`, `csv`, `txt`
- encrypted packages
- macros or VBA execution

See also: [Limitations](limitations) and [Formula Support](formula-support).

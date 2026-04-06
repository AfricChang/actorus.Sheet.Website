---
title: "Limitations"
description: "Explicit boundaries to understand before committing to a workflow."
summary: "AcTorus.Sheet documents its boundaries clearly. Review this before adoption."
category: limitations
order: 60
---

## File format

The current primary public route is `.xlsx`.

The following are not current public commitments:

- `xls`, `xlsm`, `xlsb`, `ods`, `csv`, `txt`
- encrypted packages

## Product scope

AcTorus.Sheet is a headless `.NET` spreadsheet engine. It is not:

- a desktop spreadsheet editor
- a browser spreadsheet control
- a designer or rendering suite

## Explicitly excluded

- UI, designer, rendering
- charts, shapes, chart sheets
- macro and VBA execution
- 3D references
- external workbook references
- goal seek and what-if tables

## Formula boundary

The formula engine covers 298 documented public function names across all major families, but that is not the same as the full Excel function universe.

If your workload depends on:

- deeper fixed-income analytics beyond the current admitted financial subset
- rare statistical long-tail functions
- full spill-array parity
- what-if / goal seek / data table workflows

evaluate those areas explicitly before adoption. See [Formula Support](formula-support) for the complete list.

## Workbook-feature boundary

The product supports a documented subset of workbook features. Pay attention to whether a capability is described as:

- full support
- a bounded subset
- round-trip only (metadata preserved, not executed or rendered)

See [Workbook Features](workbook-features) for details.

## Adoption checklist

Before formal adoption, confirm:

1. every required formula is in the [Formula Support](formula-support) list
2. every required file feature is in [Workbook Features](workbook-features)
3. the workload does not require UI, charts, macros, encryption, or external refs
4. the workload is `.xlsx`-first

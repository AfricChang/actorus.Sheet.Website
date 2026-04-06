---
title: "FAQ"
description: "Answers to the most common product and evaluation questions."
summary: "Quick answers about file formats, installation, .NET versions, formula support, backend use, and commercial licensing."
category: faq
order: 70
---

## What file format does the product focus on?

`.xlsx`. Other formats (`xls`, `xlsm`, `csv`, etc.) are not current public commitments.

## What .NET versions are supported?

`.NET 8` and `.NET 9`.

## How do I install it?

The current version is distributed via GitHub Releases — NuGet.org publishing is planned for a future release.

1. Download `AcTorus.Sheet.0.1.0.nupkg` from the [Releases page](https://github.com/AfricChang/actorus.Sheet.Website/releases).
2. Add the download folder as a local NuGet source: `dotnet nuget add source /path/to/folder --name actorus-local`
3. Add the package: `dotnet add package AcTorus.Sheet --version 0.1.0`

## Can it calculate formulas?

Yes. The engine documents 298 public function names across all major formula families. See [Formula Support](formula-support) for the complete list.

## Can it run in backend services?

Yes. It is designed to fit application logic, background jobs, and service-side spreadsheet workflows with no dependency on desktop software.

## Is this a desktop spreadsheet program?

No. It is a headless spreadsheet engine for software workflows.

## Is it free to use?

Free to evaluate. Commercial use in production products or services requires a commercial license — contact us to discuss.

## How do I ask about commercial licensing?

Use the contact page for direct commercial questions.

---
title: "快速开始"
description: "从第一次了解产品到跑通第一个工作簿流程的简短路径。"
summary: "了解 AcTorus.Sheet 适合做什么、如何安装，以及如何完成第一个 .xlsx 自动化流程。"
category: gettingStarted
order: 10
---

## AcTorus.Sheet 适合做什么

AcTorus.Sheet 是一个面向 `.NET` 团队的无界面电子表格引擎，重点面向 `.xlsx` 文件处理和自动化工作流，不是桌面编辑器或 UI 控件。

它适合做这些事：

- 打开工作簿文件或创建新工作簿
- 读取和写入工作表数据
- 在服务端计算公式
- 将处理结果保存为 `.xlsx`

## 环境要求

- `.NET 8` 或 `.NET 9`
- 能够引用 NuGet 包的项目

## 安装方式

当前版本通过 GitHub Releases 分发，NuGet.org 发布计划在后续版本中推出。

**第一步  下载包**

前往 [Releases 页面](https://github.com/AfricChang/actorus.Sheet.Website/releases)，下载 `AcTorus.Sheet.0.1.0.nupkg`。

**第二步  添加本地 NuGet 源**

```bash
dotnet nuget add source /path/to/folder --name actorus-local
```

**第三步  在项目中添加包引用**

```bash
dotnet add package AcTorus.Sheet --version 0.1.0
```

## 最小示例

```csharp
using AcTorus.Sheet;

SheetRuntime runtime = new();

using IWorkbookSession session = runtime.CreateSession();
IWorkbookDocument workbook = session.CreateWorkbook("Report");
IWorksheet sheet = workbook.ActiveWorksheet;

sheet.GetRange("A1").Value = CellValue.FromText("收入");
sheet.GetRange("B1").Value = CellValue.FromNumber(120d);
sheet.GetRange("A2").Value = CellValue.FromText("成本");
sheet.GetRange("B2").Value = CellValue.FromNumber(45d);
sheet.GetRange("A3").Value = CellValue.FromText("利润");
sheet.GetRange("B3").Formula = "=B1-B2";

CalculationResult result = workbook.Calculate();
byte[] payload = workbook.Save();
```

## 打开已有 .xlsx 文件

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

## 建议的阅读顺序

1. 功能概览  引擎覆盖的能力范围
2. 公式支持  完整的支持函数列表
3. 工作簿特性  文件特性的边界说明
4. 限制说明  明确不在范围内的内容
5. 使用指南  常见集成模式和代码示例
6. 常见问题  快速解答

---
title: "使用指南"
description: "常见集成模式和代码示例。"
summary: "可以把 AcTorus.Sheet 用于报表生成、批量处理、后端重算和现有系统集成。"
category: guides
order: 50
---

## 报表生成

从模板出发或在代码中创建工作簿，写入业务数据，计算公式，保存后交付。

```csharp
using AcTorus.Sheet;

SheetRuntime runtime = new();
using IWorkbookSession session = runtime.CreateSession();
IWorkbookDocument workbook = session.CreateWorkbook("Budget");
IWorksheet sheet = workbook.ActiveWorksheet;

sheet.GetRange("A1").Value = CellValue.FromText("项目");
sheet.GetRange("B1").Value = CellValue.FromText("金额");
sheet.GetRange("A2").Value = CellValue.FromText("服务器");
sheet.GetRange("B2").Value = CellValue.FromNumber(1200d);
sheet.GetRange("A3").Value = CellValue.FromText("合计");
sheet.GetRange("B3").Formula = "=SUM(B2:B2)";

workbook.Calculate();
byte[] payload = workbook.Save();
```

## 跨工作表公式与名称范围

```csharp
IWorksheet summary = workbook.ActiveWorksheet;
IWorksheet data = workbook.AddWorksheet("Data");

data.GetRange("B1").Value = CellValue.FromNumber(12d);
data.GetRange("B2").Value = CellValue.FromNumber(18d);
data.GetRange("B3").Value = CellValue.FromNumber(20d);

// 跨工作表公式
summary.GetRange("A1").Formula = "=SUM(Data!B1:B3)";

// 名称范围
workbook.DefineName("Sales", data.Name, "B1:B3");
summary.GetRange("A2").Formula = "=AVERAGE(Sales)";

workbook.Calculate();
```

## 打开已有工作簿并处理

```csharp
byte[] input = File.ReadAllBytes("template.xlsx");

SheetRuntime runtime = new();
using IWorkbookSession session = runtime.CreateSession();
IWorkbookDocument workbook = session.OpenWorkbook(
    input,
    new WorkbookOpenOptions { RecalculateOnOpen = true });

IWorksheet sheet = workbook.ActiveWorksheet;
sheet.GetRange("B2").Value = CellValue.FromNumber(99000d);

workbook.Calculate();
File.WriteAllBytes("output.xlsx", workbook.Save());
```

## 保存后重新打开验证

```csharp
byte[] payload = workbook.Save(new WorkbookSaveOptions
{
    RecalculateBeforeSave = true
});

using IWorkbookSession reopenedSession = runtime.CreateSession();
IWorkbookDocument reopened = reopenedSession.OpenWorkbook(
    payload,
    new WorkbookOpenOptions { RecalculateOnOpen = true });

string result = reopened.ActiveWorksheet.GetRange("B3").Text;
```

## 批量工作簿处理

在定时任务或内部处理流程中使用引擎，对大量工作簿执行相同的重复处理。在应用启动时创建一个 `SheetRuntime`，每个工作簿或每次请求创建一个新 session。

## 后端服务集成

把工作簿处理逻辑封装在专用服务类中，而不是把 `GetRange` 调用散落在控制器或处理器里：

```csharp
public class WorkbookReportService
{
    private readonly SheetRuntime _runtime = new();

    public byte[] GenerateReport(ReportData data)
    {
        using IWorkbookSession session = _runtime.CreateSession();
        IWorkbookDocument workbook = session.CreateWorkbook("Report");
        // ... 填充数据、计算、保存
        return workbook.Save();
    }
}
```

## 正式采用前的确认清单

1. 所需公式都在[公式支持](formula-support)列表中
2. 所需文件特性都在[工作簿特性](workbook-features)中
3. 业务流程不依赖 UI、图表、宏、加密包或外部引用
4. 文件格式以 `.xlsx` 为主

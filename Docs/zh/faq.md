---
title: "常见问题"
description: "关于产品定位、安装方式和评估方法的常见问题汇总。"
summary: "快速了解文件格式、安装方式、.NET 版本、公式支持、后端使用和商业授权。"
category: faq
order: 70
---

## 当前主要支持什么文件格式？

`.xlsx`。其他格式（`xls`、`xlsm`、`csv` 等）不在当前公开承诺范围内。

## 支持哪些 .NET 版本？

`.NET 8` 和 `.NET 9`。

## 怎么安装？

当前版本通过 GitHub Releases 分发，NuGet.org 发布计划在后续版本中推出。

1. 从 [Releases 页面](https://github.com/AfricChang/actorus.Sheet.Website/releases) 下载 `AcTorus.Sheet.0.1.0.nupkg`
2. 将下载目录添加为本地 NuGet 源：`dotnet nuget add source /path/to/folder --name actorus-local`
3. 添加包引用：`dotnet add package AcTorus.Sheet --version 0.1.0`

## 支持公式计算吗？

支持。引擎文档化了 298 个公开函数名，覆盖所有主要公式家族。完整列表见[公式支持](formula-support)。

## 可以跑在后端服务里吗？

可以。它适合进入应用逻辑、后台任务和服务端电子表格流程，不依赖桌面软件。

## 它是桌面电子表格软件吗？

不是。它是面向软件工作流的无界面电子表格引擎。

## 可以免费使用吗？

可以免费评估使用。在商业产品或服务中用于生产环境需要商业授权，请联系我们沟通。

## 如何咨询商业授权？

通过联系页发起直接商务咨询即可。

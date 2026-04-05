# 服务端工作流示例

演示如何从 .NET HTTP 客户端调用 AcTorus.Sheet 服务端。

## 涵盖内容

- 通过 `/metadata` 端点读取服务元数据
- 通过 `/workbooks/create` 创建工作簿
- 将工作簿契约发送到 `/workbooks/calculate` 进行服务端公式计算
- 通过 `/workbooks/batch-calculate` 批量计算多个工作簿
- 通过 `/workbooks/save` 保存计算结果
- 通过 `/workbooks/open` 重新打开已保存的工作簿并启用重新计算
- 从返回的工作簿契约中读取公式结果

## 前提条件

需要先启动 AcTorus.Sheet 服务端，并将其地址作为第一个参数传入：

```bash
dotnet run -- http://localhost:5211
```

不传参数时默认使用 `http://localhost:5211`。

## 适合的场景

后端 API、内部流程服务和队列式工作簿处理任务——引擎以托管服务方式运行，而不是作为嵌入式库使用。

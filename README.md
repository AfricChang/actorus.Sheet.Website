# AcTorus.Sheet Website

Public product website for [AcTorus.Sheet](https://africchang.github.io/actorus.Sheet.Website/), built with Astro and deployed to GitHub Pages.

## English

### What this repo contains

- Bilingual (English / 简体中文) public-facing product site
- Public docs under `Docs/`
- Public example code under `Examples/`
- GitHub Pages deployment workflow

### Local development

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
```

### Environment variables

| Variable | Default |
|---|---|
| `PUBLIC_SITE_URL` | `https://africchang.github.io` |
| `PUBLIC_SITE_BASE` | `/actorus.Sheet.Website` |

Set these in a `.env` file for local overrides. The defaults are used in the GitHub Actions deployment.

### Contributing

Public docs live in `Docs/en` and `Docs/zh`. Example code lives in `Examples/`. Bug reports and suggestions are welcome via [GitHub Issues](https://github.com/AfricChang/actorus.Sheet.Website/issues).

---

## 中文

### 仓库内容

- 中英双语公开产品展示站
- `Docs/` 下的公开文档
- `Examples/` 下的公开示例代码
- GitHub Pages 部署工作流

### 本地开发

```bash
npm install
npm run dev
```

### 生产构建

```bash
npm run build
```

### 环境变量

| 变量 | 默认值 |
|---|---|
| `PUBLIC_SITE_URL` | `https://africchang.github.io` |
| `PUBLIC_SITE_BASE` | `/actorus.Sheet.Website` |

本地开发时可在 `.env` 文件中覆盖。GitHub Actions 部署时使用默认值。

### 参与贡献

公开文档在 `Docs/en` 和 `Docs/zh` 目录下，示例代码在 `Examples/` 目录下。欢迎通过 [GitHub Issues](https://github.com/AfricChang/actorus.Sheet.Website/issues) 提交问题或建议。

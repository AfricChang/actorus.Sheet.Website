# AcTorus.Sheet Website

Public product website for `AcTorus.Sheet`, built with `Astro` and prepared for GitHub Pages first, custom hosting later.

## English

### What this repo contains

- a bilingual public-facing product site for `AcTorus.Sheet`
- public docs curated from the main product repository
- public example code under `Examples/`
- GitHub Pages deployment workflow and path-aware site config
- placeholder image/download directories for future assets

### Local development

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
```

### Key environment assumptions

- `PUBLIC_SITE_URL`
  - default: `https://africchang.github.io`
- `PUBLIC_SITE_BASE`
  - default: `/actorus.Sheet.Website`

These two values keep the site portable. Switching to a custom domain later should only require config changes, not a content restructure.

### Important launch checklist

- replace the placeholder public email in `src/data/site.ts`
- add real screenshots under `public/Images/screenshots/`
- add real download or release links if the public release lane changes
- review the curated public docs against the latest main repo baseline before publishing

### Content sync policy

- main source of truth: `https://github.com/AfricChang/acTorus.Sheet`
- this website repo keeps curated, public-facing, bilingual copies under `Docs/en` and `Docs/zh`
- user-facing example code belongs in `Examples/`, not as a full mirror of the product source tree
- do not assume every internal planning document belongs on the public website

## 中文

### 仓库内容

- `AcTorus.Sheet` 的公开产品展示站
- 从主产品仓库裁剪同步而来的中英文公开文档
- 放在 `Examples/` 下的公开示例代码
- GitHub Pages 部署工作流与可迁移站点配置
- 预留的图片、下载目录，方便后续补充素材

### 本地开发

```bash
npm install
npm run dev
```

### 生产构建

```bash
npm run build
```

### 关键配置假设

- `PUBLIC_SITE_URL`
  - 默认值：`https://africchang.github.io`
- `PUBLIC_SITE_BASE`
  - 默认值：`/actorus.Sheet.Website`

后续迁移独立服务器时，优先只调整这两个配置，而不要重做内容结构。

### 上线前必查

- 将 `src/data/site.ts` 中的占位邮箱替换为正式公开联系邮箱
- 在 `public/Images/screenshots/` 下补充真实截图
- 若公开下载路径有变化，更新下载入口配置
- 发布前按主仓库最新基线重新校对一遍公开文档

### 文档同步策略

- 主事实源：`https://github.com/AfricChang/acTorus.Sheet`
- 本仓库在 `Docs/en` 和 `Docs/zh` 中保存公开版、裁剪版、双语版文档
- 面向用户的示例代码放在 `Examples/` 中，不做成主产品源码树镜像
- 不要把所有内部规划文档直接搬到公开网站

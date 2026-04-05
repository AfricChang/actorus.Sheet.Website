export const supportedLocales = ["en", "zh"] as const;

export type Locale = (typeof supportedLocales)[number];
export type RouteKey =
  | "home"
  | "features"
  | "useCases"
  | "docs"
  | "download"
  | "contact";

export interface LocalizedText {
  en: string;
  zh: string;
}

export interface FeatureGroup {
  key: string;
  title: LocalizedText;
  summary: LocalizedText;
  bullets: LocalizedText[];
}

export interface UseCaseEntry {
  key: string;
  title: LocalizedText;
  summary: LocalizedText;
  audience: LocalizedText;
  outcomes: LocalizedText[];
}

export interface QuickStartStep {
  step: string;
  title: LocalizedText;
  summary: LocalizedText;
}

export interface DownloadEntry {
  key: string;
  title: LocalizedText;
  summary: LocalizedText;
  accessLabel: LocalizedText;
  note: LocalizedText;
  ctaLabel: LocalizedText;
  linkToken: LinkToken;
}

export interface ContactChannel {
  key: string;
  title: LocalizedText;
  kind: "email" | "github";
  value: string;
  note: LocalizedText;
}

export interface FaqEntry {
  key: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export interface HeroSignal {
  key: string;
  title: LocalizedText;
  summary: LocalizedText;
}

export interface PreviewCard {
  key: string;
  title: LocalizedText;
  summary: LocalizedText;
  accent: "primary" | "secondary" | "tertiary";
}

export interface WorkflowStep {
  step: string;
  title: LocalizedText;
  summary: LocalizedText;
}

export type LinkToken =
  | "home"
  | "docs"
  | "download"
  | "contact"
  | "productRepo"
  | "productIssues"
  | "productReleases"
  | "examplesRepo";

export const defaultLocale: Locale = "en";
export const siteName = "AcTorus.Sheet";
export const productRepositoryUrl = "https://github.com/AfricChang/actorus.Sheet.Website";
export const productIssuesUrl = `${productRepositoryUrl}/issues`;
export const productReleasesUrl = `${productRepositoryUrl}/releases`;
export const websiteRepositoryUrl = productRepositoryUrl;
export const websiteExamplesUrl = `${productRepositoryUrl}/tree/main/Examples`;
export const publicContactEmail = "africchang@gmail.com";
export const siteBase = import.meta.env.BASE_URL ?? "/";

export const localeMeta = {
  en: { label: "English", nativeLabel: "English" },
  zh: { label: "Chinese", nativeLabel: "简体中文" },
} satisfies Record<Locale, { label: string; nativeLabel: string }>;

export const routes = {
  home: {
    path: "/",
    label: { en: "Home", zh: "首页" },
  },
  features: {
    path: "/features/",
    label: { en: "Features", zh: "功能" },
  },
  useCases: {
    path: "/use-cases/",
    label: { en: "Use Cases", zh: "场景" },
  },
  docs: {
    path: "/docs/",
    label: { en: "Docs", zh: "文档" },
  },
  download: {
    path: "/download/",
    label: { en: "Download", zh: "下载" },
  },
  contact: {
    path: "/contact/",
    label: { en: "Contact", zh: "联系" },
  },
} satisfies Record<RouteKey, { path: string; label: LocalizedText }>;

export const siteCopy = {
  en: {
    browserTitle: "AcTorus.Sheet",
    siteDescription:
      "Spreadsheet engine for reading, calculating, and saving .xlsx workbooks in .NET applications and services.",
    announcement: "",
    footerNote:
      "AcTorus.Sheet helps teams automate spreadsheet workflows in applications, services, and internal systems without relying on desktop spreadsheet software.",
    footerTagline:
      "Read, calculate, and save .xlsx workbooks in .NET.",
    hero: {
      eyebrow: "Spreadsheet Engine for .NET",
      title: "Make .xlsx work inside your .NET applications and services.",
      description:
        "Open templates, write business data, recalculate formulas, and save output files as part of batch jobs, internal systems, and service-side workflows.",
      primaryCta: "Get started",
      secondaryCta: "Read docs",
      note:
        "Free to evaluate. Commercial licensing is available — contact us when you are ready to discuss.",
    },
    sections: {
      features: {
        eyebrow: "Core Features",
        title: "The key capabilities that matter in workbook automation.",
        description:
          "Covers workbook I/O, formula calculation, file structure handling, and .NET integration — the practical building blocks for real workbook workflows.",
      },
      useCases: {
        eyebrow: "Use Cases",
        title: "Built for real systems, not just manual spreadsheet handling.",
        description:
          "From reporting pipelines to service-side recalculation, the goal is to move workbook logic into repeatable application workflows.",
      },
      scope: {
        eyebrow: "Support Scope",
        title: "Clear about what is supported today.",
        description:
          "Here is what the engine handles today and what falls outside the current scope, so you can judge fit before going further.",
      },
      quickStart: {
        eyebrow: "Quick Start",
        title: "From download to first workbook flow, the path stays short.",
        description:
          "Review the basics, grab the public materials, and validate workbook reading and calculation in your own .NET flow.",
      },
      preview: {
        eyebrow: "Workflow Snapshot",
        title: "From workbook input to service-side output.",
        description:
          "Load a workbook, push in data, recalculate formulas, then hand the result to the next job or API response.",
      },
      cta: {
        title: "Ready to bring workbook processing into your own system?",
        description:
          "Free to evaluate — download the examples and releases, run them in your own .NET flow. Commercial licensing is available when you are ready.",
        primaryCta: "Download",
        secondaryCta: "Contact us",
      },
    },
    featuresPage: {
      title: "Features",
      description:
        "A user-facing overview of workbook handling, formula support, file features, and integration options.",
    },
    useCasesPage: {
      title: "Use Cases",
      description:
        "Examples of the kinds of spreadsheet automation scenarios AcTorus.Sheet is designed to support.",
    },
    docsPage: {
      title: "Docs",
      description:
        "Product usage documentation for getting started, supported features, workbook handling, formulas, and common questions.",
      readDocLabel: "Read",
      emptyLabel: "No public docs are available for this language yet.",
    },
    downloadPage: {
      title: "Download",
      description:
        "Free to evaluate. Download the examples and releases to run in your own .NET workflow.",
      ctaTitle: "Interested in commercial licensing?",
      ctaBody:
        "Commercial licensing is available and currently being finalized. Contact us to discuss your use case and get early access details.",
      faqTitle: "Common questions",
    },
    contactPage: {
      title: "Contact",
      description:
        "For commercial licensing inquiries, reach out by email. For public technical feedback or bug reports, use GitHub Issues.",
      faqTitle: "Before you contact us",
    },
    docsDetail: {
      backToDocs: "Back to docs",
      relatedCta: "Interested in commercial licensing?",
      relatedButton: "Contact us",
    },
    showcase: {
      panelLabel: "Workbook Runtime",
      fileName: "Quarterly-Plan.xlsx",
      status: "Recalculation ready",
      formulaLabel: "Formula snapshot",
      formulaValue: "=SUM(C4:C12)-E6",
      tabs: ["Input", "Calc", "Output"],
      rows: [
        ["Region", "Revenue", "Cost", "Margin"],
        ["North", "$128k", "$96k", "$32k"],
        ["South", "$104k", "$76k", "$28k"],
        ["West", "$149k", "$109k", "$40k"],
      ],
      floatingNotes: [
        {
          title: "Workbook structure stays intact",
          summary: "Keep sheets, formulas, and important file details together while processing.",
        },
        {
          title: "Fits API and batch jobs",
          summary: "Run the same workbook flow in requests, queues, or scheduled tasks.",
        },
      ],
      flowTitle: "A typical workbook automation flow",
      flowSummary:
        "Start from an existing workbook, run the processing steps you need, and deliver a result file back into the next workflow.",
    },
  },
  zh: {
    browserTitle: "AcTorus.Sheet",
    siteDescription:
      "面向 .NET 应用和服务的电子表格引擎，可读取、计算并保存 .xlsx 工作簿。",
    announcement: "",
    footerNote:
      "AcTorus.Sheet 适合需要在应用、服务和内部系统里自动处理电子表格工作流的团队，不依赖桌面电子表格软件。",
    footerTagline:
      "在 .NET 中读取、计算并保存 .xlsx 工作簿。",
    hero: {
      eyebrow: ".NET 电子表格引擎",
      title: "让 .xlsx 在你的 .NET 应用和服务里真正跑起来。",
      description:
        "读取模板、写入业务数据、重算公式、保存结果，把工作簿处理带进批处理任务、业务系统和服务端流程。",
      primaryCta: "开始使用",
      secondaryCta: "查看文档",
      note:
        "可免费评估使用。商业授权方案正在规划中，有意向请联系我们。",
    },
    sections: {
      features: {
        eyebrow: "核心功能",
        title: "覆盖从文件读写到公式重算的关键能力。",
        description:
          "涵盖工作簿读写、公式计算、文件结构处理和 .NET 集成，是构建真实工作簿流程的实用基础模块。",
      },
      useCases: {
        eyebrow: "典型场景",
        title: "它适合放进真实系统，而不只是人工打开表格。",
        description:
          "无论是报表生成、批量处理还是服务端重算，核心价值都是把电子表格能力带进稳定可复用的流程。",
      },
      scope: {
        eyebrow: "支持范围",
        title: "当前支持什么、暂不支持什么。",
        description:
          "以下是引擎目前能处理的内容，以及当前范围之外的部分，方便你在深入评估前快速判断是否适合。",
      },
      quickStart: {
        eyebrow: "快速开始",
        title: "从下载到跑通第一个工作簿流程，路径尽量简单。",
        description:
          "先了解支持范围，再获取公开材料，最后在自己的 .NET 流程里验证读写和计算。",
      },
      preview: {
        eyebrow: "工作流画面",
        title: "从输入工作簿到输出结果。",
        description:
          "读取工作簿、写入数据、触发公式重算，再把结果交给下一个任务、接口或报表流程。",
      },
      cta: {
        title: "准备把电子表格能力接进你的系统了吗？",
        description:
          "可免费评估——下载示例和发布包，在自己的 .NET 流程里跑起来。准备好后可联系我们了解商业授权。",
        primaryCta: "下载",
        secondaryCta: "联系我们",
      },
    },
    featuresPage: {
      title: "功能",
      description:
        "面向用户的功能概览，涵盖工作簿处理、公式支持、文件特性和集成方式。",
    },
    useCasesPage: {
      title: "场景",
      description:
        "展示 AcTorus.Sheet 更适合解决哪些电子表格自动化场景。",
    },
    docsPage: {
      title: "文档",
      description:
        "围绕开始使用、功能范围、工作簿处理、公式支持和常见问题整理的产品使用文档。",
      readDocLabel: "阅读",
      emptyLabel: "当前语言下还没有公开文档。",
    },
    downloadPage: {
      title: "下载",
      description:
        "可免费评估使用。下载示例和发布包，在自己的 .NET 流程里验证。",
      ctaTitle: "有商业授权意向？",
      ctaBody:
        "商业授权方案正在规划中，欢迎提前联系我们沟通使用场景和授权细节。",
      faqTitle: "常见问题",
    },
    contactPage: {
      title: "联系",
      description:
        "商业授权咨询请发邮件。公开技术反馈和问题报告请使用 GitHub Issues。",
      faqTitle: "联系前你可能想知道",
    },
    docsDetail: {
      backToDocs: "返回文档",
      relatedCta: "有商业授权意向？",
      relatedButton: "联系我们",
    },
    showcase: {
      panelLabel: "工作簿运行画面",
      fileName: "业务报表.xlsx",
      status: "准备重算",
      formulaLabel: "公式示例",
      formulaValue: "=SUM(C4:C12)-E6",
      tabs: ["输入", "计算", "输出"],
      rows: [
        ["区域", "收入", "成本", "毛利"],
        ["华北", "128k", "96k", "32k"],
        ["华南", "104k", "76k", "28k"],
        ["华西", "149k", "109k", "40k"],
      ],
      floatingNotes: [
        {
          title: "工作簿结构继续保留",
          summary: "在处理过程中同时保留工作表、公式和重要文件细节。",
        },
        {
          title: "适合 API 和批处理任务",
          summary: "同一套工作簿流程可以跑在请求、队列或定时任务里。",
        },
      ],
      flowTitle: "一个典型的工作簿自动化流程",
      flowSummary:
        "从现有工作簿出发，完成所需处理步骤，再把结果文件交给下一个任务、接口或业务流程。",
    },
  },
} as const;

export const heroSignals: HeroSignal[] = [
  {
    key: "xlsx-io",
    title: {
      en: ".xlsx in / out",
      zh: ".xlsx 输入 / 输出",
    },
    summary: {
      en: "Open templates, update workbook data, and save finished files.",
      zh: "读取模板、更新工作簿数据，并输出最终文件。",
    },
  },
  {
    key: "formula-recalc",
    title: {
      en: "Formula recalculation",
      zh: "公式可重算",
    },
    summary: {
      en: "Keep workbook logic running without depending on desktop spreadsheet software.",
      zh: "不依赖桌面电子表格软件，也能继续运行工作簿逻辑。",
    },
  },
  {
    key: "service-ready",
    title: {
      en: "Service-side ready",
      zh: "适合服务端流程",
    },
    summary: {
      en: "Use inside APIs, scheduled jobs, and internal processing services.",
      zh: "适合集成进 API、定时任务和内部处理服务。",
    },
  },
];

export const featureGroups: FeatureGroup[] = [
  {
    key: "workbook-io",
    title: {
      en: "Open, edit, and save .xlsx workbooks",
      zh: "打开、编辑并保存 .xlsx 工作簿",
    },
    summary: {
      en: "Use AcTorus.Sheet to create workbooks, load existing files, update data, and save results back to .xlsx.",
      zh: "你可以用 AcTorus.Sheet 创建工作簿、加载已有文件、更新数据，并把结果保存回 .xlsx。",
    },
    bullets: [
      {
        en: "Create new workbooks or open existing .xlsx files",
        zh: "创建新工作簿，或打开已有 .xlsx 文件",
      },
      {
        en: "Read and write cells through familiar A1-style addressing",
        zh: "通过熟悉的 A1 地址方式读写单元格",
      },
      {
        en: "Save updated workbooks after processing",
        zh: "处理完成后保存更新后的工作簿",
      },
    ],
  },
  {
    key: "formula-engine",
    title: {
      en: "Calculate spreadsheet formulas in backend workflows",
      zh: "在后端工作流里计算电子表格公式",
    },
    summary: {
      en: "The engine supports common workbook calculation scenarios, including cross-sheet references, named ranges, and widely used formula families.",
      zh: "引擎支持常见工作簿计算场景，包括跨工作表引用、名称范围以及常用公式家族。",
    },
    bullets: [
      {
        en: "Support for math, text, lookup, date, statistical, and financial formulas",
        zh: "支持 math、text、lookup、date、statistical、financial 等常见公式家族",
      },
      {
        en: "Cross-sheet formulas and named ranges",
        zh: "支持跨工作表公式和名称范围",
      },
      {
        en: "Useful for recalculation in services and automation tools",
        zh: "适合在服务端和自动化工具里做重新计算",
      },
    ],
  },
  {
    key: "workbook-features",
    title: {
      en: "Keep important workbook structure and file details",
      zh: "保留重要的工作簿结构与文件细节",
    },
    summary: {
      en: "AcTorus.Sheet handles more than raw cell data. It also covers a practical subset of workbook-level and worksheet-level file features.",
      zh: "AcTorus.Sheet 不只处理原始单元格数据，也覆盖了一批实用的工作簿级和工作表级文件特性。",
    },
    bullets: [
      {
        en: "Named ranges, merged cells, panes, styles, and validation basics",
        zh: "名称范围、合并单元格、冻结窗格、样式和基础数据验证",
      },
      {
        en: "Comments, hyperlinks, page setup, filters, and selected formatting rules",
        zh: "批注、超链接、页面设置、筛选以及部分格式规则",
      },
      {
        en: "Designed for real processing workflows, not only toy examples",
        zh: "面向真实处理流程，而不仅是演示级小样例",
      },
    ],
  },
  {
    key: "integration",
    title: {
      en: "Integrate into SDK code or server-side services",
      zh: "集成到 SDK 代码或服务端流程中",
    },
    summary: {
      en: "Use AcTorus.Sheet directly in .NET code or place it behind service-style processing workflows.",
      zh: "你既可以把 AcTorus.Sheet 直接嵌入 .NET 代码，也可以放进服务化处理流程中使用。",
    },
    bullets: [
      {
        en: "Embed workbook handling inside your own application logic",
        zh: "把工作簿处理能力嵌入你自己的应用逻辑",
      },
      {
        en: "Run batch workbook processing in backend jobs",
        zh: "在后端任务里运行批量工作簿处理",
      },
      {
        en: "Build service-side spreadsheet workflows without desktop dependencies",
        zh: "在不依赖桌面软件的前提下构建服务端电子表格工作流",
      },
    ],
  },
];

export const useCases: UseCaseEntry[] = [
  {
    key: "reporting",
    title: {
      en: "Generate and update reports",
      zh: "生成和更新报表",
    },
    summary: {
      en: "Fill templates, calculate results, and save finished workbooks for reporting workflows.",
      zh: "适合在报表流程里填充模板、计算结果并保存最终工作簿。",
    },
    audience: {
      en: "Internal systems, reporting tools, business apps",
      zh: "内部系统、报表工具、业务应用",
    },
    outcomes: [
      {
        en: "Update workbook data automatically",
        zh: "自动更新工作簿数据",
      },
      {
        en: "Generate output files for users or downstream systems",
        zh: "为用户或下游系统生成输出文件",
      },
    ],
  },
  {
    key: "batch-processing",
    title: {
      en: "Process many workbooks in batch",
      zh: "批量处理多个工作簿",
    },
    summary: {
      en: "Useful for import, conversion, validation, and scheduled workbook operations.",
      zh: "适合导入、转换、校验以及定时工作簿处理任务。",
    },
    audience: {
      en: "Operations teams, data pipelines, scheduled jobs",
      zh: "运营团队、数据流程、定时任务",
    },
    outcomes: [
      {
        en: "Run repeatable workbook jobs on the server",
        zh: "在服务端稳定运行重复性的工作簿任务",
      },
      {
        en: "Reduce manual spreadsheet handling",
        zh: "减少人工处理电子表格的工作量",
      },
    ],
  },
  {
    key: "backend-calculation",
    title: {
      en: "Calculate spreadsheet logic in backend services",
      zh: "在后端服务里计算电子表格逻辑",
    },
    summary: {
      en: "Put workbook formulas into service-side workflows for validation, recalculation, or result generation.",
      zh: "把工作簿公式放进后端服务流程里，用于校验、重新计算或结果生成。",
    },
    audience: {
      en: "Backend services, workflow engines, enterprise systems",
      zh: "后端服务、流程引擎、企业系统",
    },
    outcomes: [
      {
        en: "Trigger formula recalculation as part of a request or job",
        zh: "把公式重算纳入请求或任务执行流程",
      },
      {
        en: "Keep spreadsheet logic close to the data pipeline",
        zh: "让电子表格逻辑更贴近数据处理链路",
      },
    ],
  },
  {
    key: "integration",
    title: {
      en: "Integrate spreadsheet handling into existing systems",
      zh: "把电子表格处理集成进现有系统",
    },
    summary: {
      en: "Use AcTorus.Sheet as a product building block inside line-of-business tools, portals, and internal automation.",
      zh: "把 AcTorus.Sheet 作为产品能力模块，集成进业务工具、门户和内部自动化系统中。",
    },
    audience: {
      en: "Product teams, platform teams, solution builders",
      zh: "产品团队、平台团队、方案开发团队",
    },
    outcomes: [
      {
        en: "Add workbook support without building everything from scratch",
        zh: "无需从零开始，就能把工作簿能力加入现有系统",
      },
      {
        en: "Reuse one spreadsheet engine across multiple workflows",
        zh: "在多个业务流程中复用同一套电子表格引擎",
      },
    ],
  },
];

export const quickStartSteps: QuickStartStep[] = [
  {
    step: "01",
    title: {
      en: "Open the docs",
      zh: "阅读文档",
    },
    summary: {
      en: "Start with the getting started guide and feature overview to see whether the product fits your workbook scenario.",
      zh: "先从快速开始和功能概览入手，判断产品是否适合你的工作簿场景。",
    },
  },
  {
    step: "02",
    title: {
      en: "Download the public materials",
      zh: "获取公开材料",
    },
    summary: {
      en: "Use the public download page to access examples, releases, or other public evaluation materials.",
      zh: "通过公开下载页获取示例代码、发布包或其他可公开访问的评估材料。",
    },
  },
  {
    step: "03",
    title: {
      en: "Run your first workbook flow",
      zh: "跑通第一个工作簿流程",
    },
    summary: {
      en: "Open a workbook, update data, run formula calculation, and save the result inside your own .NET workflow.",
      zh: "在你自己的 .NET 流程里打开工作簿、更新数据、执行公式计算并保存结果。",
    },
  },
  {
    step: "04",
    title: {
      en: "Contact us for commercial licensing",
      zh: "商业授权请联系我们",
    },
    summary: {
      en: "Free to evaluate. When you are ready to use it in a commercial product or service, reach out to discuss licensing.",
      zh: "可免费评估使用。当你准备在商业产品或服务中使用时，联系我们沟通授权方案。",
    },
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: {
      en: "Load the workbook",
      zh: "读取工作簿",
    },
    summary: {
      en: "Start from an existing template or a workbook generated in your own system.",
      zh: "从现有模板或你自己系统生成的工作簿开始处理。",
    },
  },
  {
    step: "02",
    title: {
      en: "Update data and calculate",
      zh: "写入数据并执行计算",
    },
    summary: {
      en: "Fill cells, refresh formulas, and keep workbook logic consistent before output.",
      zh: "写入单元格、刷新公式，并在输出前保持工作簿逻辑一致。",
    },
  },
  {
    step: "03",
    title: {
      en: "Save and hand off the result",
      zh: "保存并交付结果",
    },
    summary: {
      en: "Send the finished file to the next API, job, report lane, or downstream system.",
      zh: "把生成好的文件交给下一个接口、任务、报表流程或下游系统。",
    },
  },
];

export const supportedScope = [
  {
    en: "Open, edit, calculate, and save `.xlsx` workbooks",
    zh: "打开、编辑、计算并保存 `.xlsx` 工作簿",
  },
  {
    en: "Use common formula families, including cross-sheet formulas and named ranges",
    zh: "使用常见公式家族，包括跨工作表公式和名称范围",
  },
  {
    en: "Work with useful workbook features such as styles, validation, comments, hyperlinks, and page setup",
    zh: "处理样式、数据验证、批注、超链接和页面设置等实用工作簿特性",
  },
  {
    en: "Embed the engine in .NET code or backend processing workflows",
    zh: "将引擎嵌入 .NET 代码或后端处理流程",
  },
] satisfies LocalizedText[];

export const notSupportedYet = [
  {
    en: "Desktop spreadsheet UI, visual designers, or browser spreadsheet controls",
    zh: "桌面电子表格 UI、可视化设计器或浏览器表格控件",
  },
  {
    en: "Macros, VBA execution, or script automation inside workbook files",
    zh: "宏、VBA 执行或工作簿内脚本自动化",
  },
  {
    en: "Non-`.xlsx` file formats as a primary public product promise",
    zh: "将非 `.xlsx` 文件格式作为当前公开产品承诺",
  },
  {
    en: "Every workbook feature found in full desktop spreadsheet software",
    zh: "完整桌面电子表格软件中的全部工作簿功能",
  },
] satisfies LocalizedText[];

export const previewCards: PreviewCard[] = [
  {
    key: "preview-open-save",
    title: {
      en: "Load templates and write business data",
      zh: "读取模板并写入业务数据",
    },
    summary: {
      en: "Open existing workbooks, update cells in bulk, and keep the file ready for the next processing step.",
      zh: "加载现有工作簿，批量更新单元格，并让文件继续进入后续处理步骤。",
    },
    accent: "primary",
  },
  {
    key: "preview-formulas",
    title: {
      en: "Recalculate workbook logic before export",
      zh: "在导出前重算工作簿逻辑",
    },
    summary: {
      en: "Run formulas, cross-sheet references, and named-range based logic before the output file is delivered.",
      zh: "在输出文件交付之前，执行公式、跨工作表引用和名称范围相关逻辑。",
    },
    accent: "secondary",
  },
  {
    key: "preview-service",
    title: {
      en: "Fit the result into API and job workflows",
      zh: "把结果接入 API 和任务流程",
    },
    summary: {
      en: "Run the whole workbook path inside requests, background jobs, reporting flows, or other service-side automation.",
      zh: "把整条工作簿处理链路放进请求、后台任务、报表流程或其他服务端自动化流程中。",
    },
    accent: "tertiary",
  },
];

export const downloadEntries: DownloadEntry[] = [
  {
    key: "examples",
    title: {
      en: "Examples and sample code",
      zh: "示例代码",
    },
    summary: {
      en: "Browse public example code for workbook processing, richer formula flows, reporting workloads, and service-side workflows.",
      zh: "查看面向工作簿处理、更完整公式流、报表 workload 与服务端流程的公开示例代码。",
    },
    accessLabel: {
      en: "Public",
      zh: "公开",
    },
    note: {
      en: "These examples live in the website repository and are curated for onboarding, evaluation, and workload-oriented product walkthroughs.",
      zh: "这些示例保存在网站仓库中，适合用于上手、评估和以 workload 为中心的产品演示。",
    },
    ctaLabel: {
      en: "Open examples",
      zh: "打开示例",
    },
    linkToken: "examplesRepo",
  },
  {
    key: "releases",
    title: {
      en: "Public releases",
      zh: "公开发布",
    },
    summary: {
      en: "Open the public release lane for packages or release assets that are available openly.",
      zh: "查看当前可以公开访问的包或发布制品。",
    },
    accessLabel: {
      en: "Public",
      zh: "公开",
    },
    note: {
      en: "Use this path when you want published assets instead of browsing the example repository first.",
      zh: "当你希望直接查看发布制品，而不是先浏览示例仓库时，可走这个入口。",
    },
    ctaLabel: {
      en: "Open releases",
      zh: "查看发布",
    },
    linkToken: "productReleases",
  },
  {
    key: "commercial",
    title: {
      en: "Commercial licensing",
      zh: "商业授权",
    },
    summary: {
      en: "Free to evaluate. Commercial licensing is available for production and commercial use — contact us to discuss.",
      zh: "可免费评估使用。商业产品或服务中使用需要商业授权，欢迎联系我们沟通。",
    },
    accessLabel: {
      en: "Contact us",
      zh: "联系获取",
    },
    note: {
      en: "Licensing details are not published publicly. Reach out to start a conversation about your use case.",
      zh: "授权方案不在公开站展示，请直接联系我们了解适合你场景的方案。",
    },
    ctaLabel: {
      en: "Get in touch",
      zh: "联系我们",
    },
    linkToken: "contact",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    key: "email",
    title: {
      en: "Commercial licensing inquiries",
      zh: "商业授权咨询",
    },
    kind: "email",
    value: publicContactEmail,
    note: {
      en: "Reach out by email to discuss commercial licensing, your use case, or any direct product questions.",
      zh: "如需了解商业授权方案、沟通使用场景或直接咨询产品问题，请发邮件联系。",
    },
  },
  {
    key: "github-issues",
    title: {
      en: "Technical feedback and issue reports",
      zh: "技术反馈与问题报告",
    },
    kind: "github",
    value: productIssuesUrl,
    note: {
      en: "Open a GitHub issue for bug reports, feature requests, or any technical question that can be discussed publicly.",
      zh: "如果是 bug 报告、功能建议或可以公开讨论的技术问题，请直接在 GitHub 提 issue。",
    },
  },
  {
    key: "github-source",
    title: {
      en: "Product repository and public materials",
      zh: "产品仓库与公开材料",
    },
    kind: "github",
    value: websiteRepositoryUrl,
    note: {
      en: "Browse the public website repository, docs, and example materials.",
      zh: "查看公开网站仓库、文档和示例材料。",
    },
  },
];

export const faqEntries: FaqEntry[] = [
  {
    key: "formats",
    question: {
      en: "What file format does AcTorus.Sheet focus on?",
      zh: "AcTorus.Sheet 当前主要支持什么文件格式？",
    },
    answer: {
      en: "The current public product focus is `.xlsx`.",
      zh: "当前公开产品重点支持 `.xlsx`。",
    },
  },
  {
    key: "platform",
    question: {
      en: "Is it for desktop users or for application developers?",
      zh: "它是给桌面终端用户用的，还是给开发团队用的？",
    },
    answer: {
      en: "It is designed to be embedded in .NET applications and backend services, rather than used as a desktop spreadsheet program.",
      zh: "它更适合嵌入 .NET 应用和后端服务中，而不是作为桌面电子表格软件来使用。",
    },
  },
  {
    key: "formula-support",
    question: {
      en: "Does it support workbook formulas?",
      zh: "它支持工作簿公式吗？",
    },
    answer: {
      en: "Yes. The product supports a practical range of common formula families, including cross-sheet calculation scenarios.",
      zh: "支持。产品覆盖了一批实用的常见公式家族，也支持跨工作表计算场景。",
    },
  },
  {
    key: "service-side",
    question: {
      en: "Can it be used in backend or service-side workflows?",
      zh: "可以用于后端或服务端工作流吗？",
    },
    answer: {
      en: "Yes. AcTorus.Sheet is intended to fit application logic, backend jobs, and service-side spreadsheet workflows.",
      zh: "可以。AcTorus.Sheet 适合进入应用逻辑、后端任务和服务端电子表格工作流。",
    },
  },
  {
    key: "trial",
    question: {
      en: "Is it free to use?",
      zh: "可以免费使用吗？",
    },
    answer: {
      en: "Free to evaluate and test. Commercial use in production products or services requires a commercial license — contact us to discuss.",
      zh: "可以免费评估和测试使用。在商业产品或服务中用于生产环境需要商业授权，请联系我们沟通。",
    },
  },
] satisfies FaqEntry[];

export const docsCategoryLabels = {
  gettingStarted: { en: "Getting Started", zh: "快速开始" },
  features: { en: "Feature Overview", zh: "功能概览" },
  formulas: { en: "Formula Support", zh: "公式支持" },
  workbook: { en: "Workbook Features", zh: "工作簿特性" },
  guides: { en: "Usage Guides", zh: "使用指南" },
  limitations: { en: "Limitations", zh: "限制说明" },
  faq: { en: "FAQ", zh: "常见问题" },
} as const;

export type DocsCategory = keyof typeof docsCategoryLabels;

export function text(value: LocalizedText, locale: Locale): string {
  return value[locale];
}

export function isLocale(value: string | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function requireLocale(value: string | undefined): Locale {
  if (!isLocale(value)) {
    throw new Error(`Unsupported locale: ${value ?? "undefined"}`);
  }

  return value;
}

export function buildLocalePath(locale: Locale, relativePath = "/"): string {
  const trimmed =
    relativePath === "/"
      ? ""
      : relativePath.replace(/^\/+/, "").replace(/\/+$/, "");

  return trimmed ? `/${locale}/${trimmed}/` : `/${locale}/`;
}

export function withBasePath(path: string): string {
  const normalizedBase = siteBase.endsWith("/") ? siteBase : `${siteBase}/`;
  const trimmedPath = path.replace(/^\/+/, "");

  if (normalizedBase === "/") {
    return trimmedPath ? `/${trimmedPath}` : "/";
  }

  return trimmedPath ? `${normalizedBase}${trimmedPath}` : normalizedBase;
}

export function buildLocaleHref(locale: Locale, relativePath = "/"): string {
  return withBasePath(buildLocalePath(locale, relativePath));
}

export function getStaticLocalePaths() {
  return supportedLocales.map((locale) => ({
    params: { locale },
  }));
}

export function getNavItems(locale: Locale) {
  return (Object.entries(routes) as Array<[RouteKey, (typeof routes)[RouteKey]]>).map(
    ([key, route]) => ({
      key,
      path: route.path,
      href: buildLocaleHref(locale, route.path),
      label: text(route.label, locale),
    }),
  );
}

export function resolveLink(token: LinkToken, locale: Locale): string {
  switch (token) {
    case "productRepo":
      return productRepositoryUrl;
    case "productIssues":
      return productIssuesUrl;
    case "productReleases":
      return productReleasesUrl;
    case "examplesRepo":
      return websiteExamplesUrl;
    case "docs":
      return buildLocaleHref(locale, routes.docs.path);
    case "download":
      return buildLocaleHref(locale, routes.download.path);
    case "contact":
      return buildLocaleHref(locale, routes.contact.path);
    default:
      return buildLocaleHref(locale, routes.home.path);
  }
}

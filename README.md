# ZeroTermux Wiki

[![Website](https://img.shields.io/badge/Website-Live-brightgreen.svg)](https://wiki.zerotermux.dev/)
[![Powered by VitePress](https://img.shields.io/badge/Powered%20by-VitePress-blueviolet)](https://vitepress.dev/)

欢迎来到 ZeroTermux Wiki 的官方源码仓库！本文档库旨在为 [ZeroTermux](https://github.com/hanxinhao000/ZeroTermux) 用户提供全面、准确的指南、教程和常见问题解答。

**在线访问 👉 [https://wiki.zerotermux.dev/](https://wiki.zerotermux.dev/)**

## 📖 关于此项目

本 Wiki 使用 [VitePress](https://vitepress.dev/) 构建，所有内容的源文件都存放在本 GitHub 仓库的 `docs` 目录下。

我们致力于打造一个开放、协作的知识库，帮助用户更好地使用 ZeroTermux。

## 🚀 如何贡献

我们非常欢迎并感谢任何形式的贡献，无论是修正一个错别字，还是撰写一篇全新的教程。

贡献内容非常简单，推荐使用行业标准的 **Fork & Pull Request** 流程。

### 主要贡献流程

1.  **Fork 本仓库**
    点击页面右上角的 `Fork` 按钮，将此仓库复制到你自己的 GitHub 账号下。

2.  **创建新分支 (Branch)**
    在你的 Fork 仓库中，从 `main` 分支创建一个新的分支来存放你的修改。分支名最好能描述你的工作内容，例如 `add-install-guide` 或 `fix-typo-in-homepage`。

3.  **进行修改**
    在 `docs` 目录下创建新的 `.md` 文件或修改现有文件。
    * **新页面**：如果你创建了一个全新的页面，请记得在 `docs/.vitepress/config.mjs` 文件的 `sidebar`（侧边栏）配置中添加对应的链接，这样用户才能在导航中找到它。
    * **内容编写**：请使用标准的 Markdown 语法。你也可以使用 VitePress 提供的[自定义容器](https://vitepress.dev/guide/markdown#custom-containers)来美化页面，如 `:::tip`、`:::warning`、`:::danger` 等。

4.  **提交拉取请求 (Pull Request)**
    完成修改后，回到你的 Fork 仓库页面，提交一个 Pull Request (PR) 到本仓库的 `main` 分支。请在 PR 中简要说明你做了哪些修改和原因。

5.  **代码审查与合并**
    我们会尽快审查你的 PR。一旦通过，你的贡献就会被合并到主分支，网站将在几分钟内自动完成部署和更新！

### 快速修正 (针对小的错别字)

如果你只是发现了一个简单的错别字，可以直接在 GitHub 上点击对应文件右上角的**铅笔图标**进行在线编辑，然后直接提交修改。

## 🛠️ 本地开发环境

如果你想在本地电脑上预览你的修改，可以按照以下步骤操作：

1.  **克隆你的 Fork 仓库到本地**
    ```bash
    git clone https://github.com/你的用户名/zerotermux-wiki.git
    ```

2.  **进入项目目录**
    ```bash
    cd zerotermux-wiki
    ```

3.  **安装依赖**
    确保你已经安装了 [Node.js](https://nodejs.org/) (v18+)。
    ```bash
    npm install
    ```

4.  **启动本地开发服务器**
    ```bash
    npm run docs:dev
    ```
    执行后，终端会显示一个本地网址 (通常是 `http://localhost:5173`)。在浏览器中打开它，你就可以实时预览你的修改了。

## 🤖 给 AI 写文档用的提示词

如果你想让 AI 帮忙补充 Wiki 内容，可以分两步给提示词。第一段让 AI 了解仓库环境并把项目拉到本地，第二段再说明要写什么内容。人只需要提供大体方向、功能名、已有步骤或报错现象，具体结构和文字可以先交给 AI 生成，再人工检查。

### 1. 让 AI 了解项目环境

```text
我正在维护 ZeroTermux-WIKI。

这是 ZeroTermux 的 Wiki 文档仓库，主要给 ZeroTermux 用户阅读。它不是 ZeroTermux Android App 源码仓库。

请先把项目拉到本地并了解结构：

git clone https://github.com/ixcmstudio/ZeroTermux-WIKI.git
cd ZeroTermux-WIKI
npm install
npm run docs:dev

项目结构：
- 文档正文在 docs/ 目录下。
- VitePress 配置在 docs/.vitepress/config.mjs。
- 首页内容在 docs/index.md。
- README.md 是 GitHub 仓库介绍，不等同于网站首页。
- 开发者文档在 docs/developer/。

修改文档时请注意：
1. 新增页面后，要检查 docs/.vitepress/config.mjs 里的 sidebar 是否需要增加入口。
2. 修改站点浏览器标题时，看 defineConfig 里的 title。
3. 只修改左上角显示名称时，看 themeConfig.siteTitle，不要误改 title。
4. 首页展示内容优先改 docs/index.md。
5. 不要把 node_modules、docs/.vitepress/cache、docs/.vitepress/dist 等本地生成内容提交进来。
```

### 2. 让 AI 按要求补充 Wiki 内容

```text
我接下来会告诉你要补充的 Wiki 内容。请你根据我提供的大体方向和资料，帮我生成适合放进 ZeroTermux-WIKI 的 Markdown 文档。

我会告诉你：
1. 要写哪个功能、教程或问题。
2. 用户大概会从哪里进入这个功能。
3. 我已经知道的使用步骤、注意事项或报错现象。
4. 如果有源码、截图、日志或旧文档，我也会一起提供。

请你帮我生成适合放进 Wiki 的 Markdown 内容。

写作要求：
1. 面向普通 ZeroTermux 用户，先讲怎么用，再讲注意事项。
2. 标题层级清楚，适合直接放进 VitePress 页面。
3. 操作步骤要具体，不要只写“按提示操作”。
4. 遇到路径、按钮名、菜单名、命令时，用代码格式标出来。
5. 语气正常一点，像维护者写的说明，不要写成宣传文案。
6. 不要编造我没有提供的信息；不确定的地方请标出来。
7. 如果内容适合拆成“使用方法 / 常见问题 / 注意事项”，请帮我拆好。
8. 如果需要提醒用户备份、授权、联网、等待下载，请写清楚。
9. 不要写“不是……而是……”“给后来人的一句话”“总结一下”“总之”这类明显 AI 味很重的句子。
10. 不要用空泛形容词堆内容，比如“全面、强大、优雅、丝滑、极致、完善”。能写步骤就写步骤，能写现象就写现象。
11. 不要用教育口吻训人，少写“你必须”“千万不要”。需要提醒风险时，直接说明会发生什么。

输出时请给我：
1. 建议放在哪个页面，或建议新建什么文件名。
2. 完整 Markdown 正文。
3. 如果需要加到侧边栏，请告诉我适合放在哪个分类下面。
4. 你认为还缺哪些信息，需要我再补充。
```

## 📄 许可证

本项目下的所有文档内容均采用 MIT License 授权。

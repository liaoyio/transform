# Transform

Transform 是一个面向前端开发的在线转换工具箱，用来快速处理 JSON、JSX、CSS、JavaScript、TypeScript 和 Markdown 之间的常见格式转换。

![Transform 示例](public/cover.png)

## 功能

当前项目只保留左侧菜单中公开的工具：

| 分类 | 工具 |
| --- | --- |
| JSON | JSON 转 Metafields、JSON 转 TypeScript、JSON 转 Zod Schema、JSON 转字符串、JSON 字符串转 JSON |
| Others | Markdown 转 HTML |
| JSX | HTML 转 JSX、SVG 转 JSX |
| CSS | CSS 转 字符串、CSS 转 JS 对象、CSS 转 TailwindCSS、CSS IN JS 转换 |
| JS | JS 对象转 JSON、JS 对象转 TS |
| TS | TS 转 JavaScript、TS 转 Zod Schema |

每个工具都采用统一的左右分栏体验：左侧输入源内容，右侧实时查看转换结果，然后复制回项目中使用。

## 快速开始

项目需要 Node.js 20.x 和 Yarn 1。

```bash
yarn
yarn dev
```

启动后访问 `http://localhost:3000`。

## 生产运行

```bash
yarn
yarn build
yarn start
```

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `yarn dev` | 启动开发服务 |
| `yarn build` | 构建生产版本 |
| `yarn start` | 启动生产服务 |
| `yarn format` | 格式化 TypeScript 和 TSX 文件 |


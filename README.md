# Personal Profile Site

这是一个 Vite + React 个人网站，方向是“Palmer 的高级感 + 技术博客结构”。

## 当前结构

- `index.html`：Vite HTML 挂载入口
- `src/App.jsx`：页面组件、内容数据、交互逻辑
- `src/main.jsx`：React 入口
- `src/styles.css`：视觉风格、响应式布局、动效
- `assets/profile-placeholder.svg`：头像占位图，后续可替换成真实头像

## 已包含的交互

- 导航随滚动高亮当前区域
- 首屏动态信号粒子背景
- 滚动关键词带与项目卡悬浮光泽
- 文章分类筛选，并同步按钮可访问状态
- 邮箱复制；在浏览器不支持剪贴板 API 时提示手动复制
- 键盘用户可用的跳过导航链接与焦点样式

## 运行

```bash
npm install
npm run dev
```

当前 Windows 文件系统环境下，Vite 的 HMR dev optimizer 会读取到受控文件占位内容，导致 React 依赖在浏览器里白屏。这里的 `npm run dev` 已配置为先构建再用 `vite preview` 启动本地预览，页面可正常查看。

## 构建

```bash
npm run build
```

## 后续需要替换

- 你的真实姓名、英文名或品牌名
- 头像或个人照片
- 邮箱、社交链接、GitHub、公众号等
- 真实项目、文章标题、文章链接
- 个人介绍和关键数据

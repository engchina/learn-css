# CSS学习项目

这是一个用于学习CSS的React项目，包含了从基础到高级的CSS课程内容。

## 项目构建步骤

### 1. 环境准备

确保你的开发环境满足以下要求：
- Node.js (推荐使用 v16 或更高版本)
- npm (Node.js包管理器)

### 2. 项目初始化

```bash
# 使用Vite创建React + TypeScript项目
npx create vite@latest learn-css --template react-ts

# 进入项目目录
cd learn-css
```

### 3. 安装依赖

```bash
# 安装项目依赖
npm install

# 安装路由依赖
npm install react-router-dom@6.3.0 @types/react-router-dom@5.3.3

# 安装样式相关依赖
npm install styled-components@5.3.9 @types/styled-components@5.1.26

# 安装Tailwind CSS及其依赖
npm install -D tailwindcss@3.4.17 postcss@8.4.23 autoprefixer@10.4.20
```

### 4. 配置项目

#### 4.1 初始化Tailwind CSS配置

```bash
npx tailwindcss init -p
```

这将创建`tailwind.config.js`和`postcss.config.js`文件。

#### 4.2 配置Tailwind CSS

修改`tailwind.config.js`：

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### 4.3 配置TypeScript

项目包含三个TypeScript配置文件：
- `tsconfig.json`：基础配置
- `tsconfig.node.json`：Node.js环境配置
- `tsconfig.app.json`：应用程序配置

### 5. 项目结构

```
src/
├── assets/        # 静态资源
├── components/    # 公共组件
├── lessons/       # 课程组件
├── App.tsx       # 应用程序入口
├── main.tsx      # 主入口文件
└── index.css     # 全局样式
```

### 6. 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run preview

# 运行代码检查
npm run lint
```

### 7. 开发流程

1. 在`src/lessons`目录下创建课程组件
2. 在`src/lessons/index.ts`中注册课程
3. 使用React Router进行路由配置
4. 使用styled-components和Tailwind CSS编写样式

### 8. 项目特点

- 使用Vite作为构建工具，提供快速的开发体验
- 采用TypeScript确保代码类型安全
- 结合styled-components和Tailwind CSS的样式解决方案
- 模块化的课程组织结构
- 完整的CSS学习路径，从基础到高级

### 9. 注意事项

- 确保Node.js和npm版本兼容
- 遵循项目的代码规范和目录结构
- 使用ESLint进行代码质量控制
- 保持依赖包的版本一致性

## 许可证

[MIT](LICENSE)

import { Container, Title, Description, CodeBlock, DemoContainer } from "../components/Common";
import styled from "styled-components";

const ModuleDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem 0;

  .module {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #f8f9fa;

    &__header {
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    &__content {
      color: #666;
    }
  }
`;

const ThemeDemo = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  .theme-box {
    padding: 1rem;
    border-radius: 4px;
    flex: 1;
    text-align: center;

    &--light {
      background: #fff;
      color: #333;
      border: 1px solid #ddd;
    }

    &--dark {
      background: #333;
      color: #fff;
    }

    &--custom {
      background: linear-gradient(135deg, #4a90e2, #357abd);
      color: #fff;
    }
  }
`;

const ComponentDemo = styled.div`
  .component-library {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 1rem 0;

    &__item {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: #fff;

      &-title {
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      &-content {
        font-size: 0.9rem;
        color: #666;
      }
    }
  }
`;

const BuildDemo = styled.div`
  .build-process {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 4px;

    &__step {
      padding: 0.5rem;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;

      &-title {
        font-weight: 600;
        color: #4a90e2;
      }

      &-description {
        font-size: 0.9rem;
        color: #666;
        margin-top: 0.25rem;
      }
    }
  }
`;

const Lesson18 = () => {
  return (
    <Container>
      <Title>CSS工程化实践</Title>
      <Description>
        本课程将探讨CSS工程化实践中的关键概念和技术，包括模块化开发、样式组织策略、
        主题系统设计、组件库开发以及工程化工具链的使用。通过这些实践，我们可以构建
        出更加可维护、可扩展的CSS架构。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. CSS模块化开发</h2>
      <Description>
        探讨CSS模块化开发的方法和最佳实践：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>CSS Modules的使用和配置</li>
          <li>样式作用域隔离</li>
          <li>组件级样式管理</li>
          <li>样式依赖管理</li>
        </ul>
      </Description>
      <DemoContainer>
        <ModuleDemo>
          <div className="module">
            <div className="module__header">模块A</div>
            <div className="module__content">独立的样式作用域</div>
          </div>
          <div className="module">
            <div className="module__header">模块B</div>
            <div className="module__content">避免样式冲突</div>
          </div>
        </ModuleDemo>
      </DemoContainer>
      <CodeBlock>{`/* 使用CSS Modules */
.module {
  :global {
    .global-style { ... }
  }

  :local {
    .local-style { ... }
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 样式组织策略</h2>
      <Description>
        学习如何组织和管理大型项目中的CSS代码：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>目录结构规范</li>
          <li>样式文件分类</li>
          <li>命名规范和约定</li>
          <li>样式复用策略</li>
        </ul>
      </Description>
      <CodeBlock>{`src/
  styles/
    base/       # 基础样式
    components/ # 组件样式
    layouts/    # 布局样式
    themes/     # 主题相关
    utils/      # 工具类
    variables/  # 变量定义`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 主题系统设计</h2>
      <Description>
        实现可配置的主题系统，支持动态切换和自定义主题。
      </Description>
      <DemoContainer>
        <ThemeDemo>
          <div className="theme-box theme-box--light">浅色主题</div>
          <div className="theme-box theme-box--dark">深色主题</div>
          <div className="theme-box theme-box--custom">自定义主题</div>
        </ThemeDemo>
      </DemoContainer>
      <CodeBlock>{`:root {
  --primary-color: #4a90e2;
  --text-color: #333;
  --bg-color: #fff;
}

[data-theme="dark"] {
  --primary-color: #357abd;
  --text-color: #fff;
  --bg-color: #333;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 组件库开发</h2>
      <Description>
        学习如何构建和维护一个企业级CSS组件库。
      </Description>
      <DemoContainer>
        <ComponentDemo>
          <div className="component-library">
            <div className="component-library__item">
              <div className="component-library__item-title">按钮组件</div>
              <div className="component-library__item-content">可复用的按钮样式</div>
            </div>
            <div className="component-library__item">
              <div className="component-library__item-title">表单组件</div>
              <div className="component-library__item-content">统一的表单元素</div>
            </div>
            <div className="component-library__item">
              <div className="component-library__item-title">卡片组件</div>
              <div className="component-library__item-content">通用卡片布局</div>
            </div>
          </div>
        </ComponentDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 工程化最佳实践</h2>
      <Description>
        探讨CSS工程化过程中的工具链和最佳实践：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>预处理器的高级用法</li>
          <li>PostCSS插件配置</li>
          <li>构建流程优化</li>
          <li>性能监控和优化</li>
        </ul>
      </Description>
      <DemoContainer>
        <BuildDemo>
          <div className="build-process">
            <div className="build-process__step">
              <div className="build-process__step-title">开发阶段</div>
              <div className="build-process__step-description">
                使用Sass/Less进行开发，启用热重载
              </div>
            </div>
            <div className="build-process__step">
              <div className="build-process__step-title">构建阶段</div>
              <div className="build-process__step-description">
                CSS压缩、自动前缀、代码分割
              </div>
            </div>
            <div className="build-process__step">
              <div className="build-process__step-title">部署阶段</div>
              <div className="build-process__step-description">
                CDN部署、缓存策略、性能监控
              </div>
            </div>
          </div>
        </BuildDemo>
      </DemoContainer>
    </Container>
  );
};

export default Lesson18;
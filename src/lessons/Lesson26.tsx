import { Container, Title, Description, DemoContainer, CodeBlock } from "../components/Common";
import styled from "styled-components";

const AdvancedMixinDemo = styled.div`
  .mixin-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 1rem;

    .card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`;

const PatternDemo = styled.div`
  .pattern-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;

    .button {
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      transition: all 0.3s;

      &.primary {
        background: #4a90e2;
        color: white;

        &:hover {
          background: #357abd;
        }
      }

      &.secondary {
        background: #f5f5f5;
        color: #333;

        &:hover {
          background: #e5e5e5;
        }
      }
    }
  }
`;

const FunctionDemo = styled.div`
  .function-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;

    .color-box {
      height: 100px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
  }
`;

const ModuleDemo = styled.div`
  .module-container {
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;

    .module-component {
      margin-bottom: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
  }
`;

const CaseStudyDemo = styled.div`
  .case-container {
    padding: 1rem;

    .theme-switcher {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;

      button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background: #4a90e2;
        color: white;

        &:hover {
          background: #357abd;
        }
      }
    }

    .content {
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

const Lesson26 = () => {
  return (
    <Container>
      <Title>CSS预处理器高级应用</Title>
      <Description>
        本课程将深入探讨CSS预处理器（如SCSS/SASS）的高级特性和最佳实践，包括复杂的混合宏设计、
        函数和计算、模块化开发策略以及在实际项目中的应用。通过这些内容，我们将学习如何更好地
        组织和管理大型项目中的样式代码。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 预处理器高级特性</h2>
      <Description>
        探索SCSS/SASS的高级特性，包括：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>条件语句和循环</li>
          <li>父选择器引用</li>
          <li>插值语法</li>
          <li>映射和列表</li>
        </ul>
      </Description>
      <DemoContainer>
        <AdvancedMixinDemo>
          <div className="mixin-container">
            <div className="card">条件语句示例</div>
            <div className="card">循环生成样式</div>
            <div className="card">高级选择器</div>
          </div>
        </AdvancedMixinDemo>
      </DemoContainer>
      <CodeBlock>{`// 条件语句和循环
@mixin theme-colors($theme: 'light') {
  @if $theme == 'light' {
    background-color: white;
    color: #333;
  } @else {
    background-color: #333;
    color: white;
  }
}

// 生成网格系统
@for $i from 1 through 12 {
  .col-#{$i} {
    width: percentage($i / 12);
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 混合宏的设计模式</h2>
      <Description>
        学习如何设计可复用的混合宏，以及常见的混合宏设计模式。
      </Description>
      <DemoContainer>
        <PatternDemo>
          <div className="pattern-container">
            <button className="button primary">主要按钮</button>
            <button className="button secondary">次要按钮</button>
          </div>
        </PatternDemo>
      </DemoContainer>
      <CodeBlock>{`// 可配置的按钮混合宏
@mixin button-variant($bg-color, $text-color, $hover-color) {
  background-color: $bg-color;
  color: $text-color;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: $hover-color;
  }
}

// 响应式混合宏
@mixin responsive($breakpoint) {
  @if $breakpoint == tablet {
    @media (min-width: 768px) { @content; }
  } @else if $breakpoint == desktop {
    @media (min-width: 1024px) { @content; }
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 函数和计算</h2>
      <Description>
        深入了解SCSS/SASS中的函数使用和数值计算：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>颜色函数</li>
          <li>数学运算</li>
          <li>自定义函数</li>
          <li>单位转换</li>
        </ul>
      </Description>
      <DemoContainer>
        <FunctionDemo>
          <div className="function-container">
            <div className="color-box" style={{ background: '#4a90e2' }}>原始颜色</div>
            <div className="color-box" style={{ background: '#357abd' }}>暗色版本</div>
            <div className="color-box" style={{ background: '#7eb0eb' }}>亮色版本</div>
          </div>
        </FunctionDemo>
      </DemoContainer>
      <CodeBlock>{`// 颜色函数
$base-color: #4a90e2;
$dark-color: darken($base-color, 10%);
$light-color: lighten($base-color, 15%);

// 自定义函数
@function calculate-width($columns, $total: 12) {
  @return percentage($columns / $total);
}

// 单位转换
@function px-to-rem($px, $base: 16px) {
  @return ($px / $base) * 1rem;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 模块化开发</h2>
      <Description>
        学习如何组织和管理大型项目中的SCSS/SASS代码：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>文件组织结构</li>
          <li>命名空间</li>
          <li>变量作用域</li>
          <li>导入策略</li>
        </ul>
      </Description>
      <DemoContainer>
        <ModuleDemo>
          <div className="module-container">
            <div className="module-component">组件模块示例</div>
            <div className="module-component">布局模块示例</div>
          </div>
        </ModuleDemo>
      </DemoContainer>
      <CodeBlock>{`// _variables.scss
$primary-color: #4a90e2;
$spacing-unit: 8px;

// _mixins.scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// components/_button.scss
@use '../abstracts/variables' as *;
@use '../abstracts/mixins' as *;

.button {
  padding: $spacing-unit * 2;
  @include flex-center;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际案例展示</h2>
      <Description>
        通过实际案例展示SCSS/SASS在项目中的应用：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>主题系统实现</li>
          <li>组件库开发</li>
          <li>响应式框架</li>
          <li>性能优化</li>
        </ul>
      </Description>
      <DemoContainer>
        <CaseStudyDemo>
          <div className="case-container">
            <div className="theme-switcher">
              <button>切换主题</button>
            </div>
            <div className="content">
              <h3>主题系统示例</h3>
              <p>展示如何使用SCSS构建灵活的主题系统</p>
            </div>
          </div>
        </CaseStudyDemo>
      </DemoContainer>
      <CodeBlock>{`// 主题系统实现
$themes: (
  light: (
    bg-color: #ffffff,
    text-color: #333333,
    primary-color: #4a90e2
  ),
  dark: (
    bg-color: #333333,
    text-color: #ffffff,
    primary-color: #7eb0eb
  )
);

@mixin themed() {
  @each $theme, $map in $themes {
    .theme-#{$theme} & {
      @content($map);
    }
  }
}

.component {
  @include themed() using ($theme) {
    background-color: map-get($theme, bg-color);
    color: map-get($theme, text-color);
  }
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson26;
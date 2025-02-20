import styled from 'styled-components';
import { Container, Title, Description, CodeBlock } from '../components/Common';

const BEMExample = styled.div`
  .block {
    padding: 1rem;
    background-color: #4a90e2;
    color: white;
    
    &__element {
      margin: 0.5rem 0;
      padding: 0.5rem;
      background-color: rgba(255, 255, 255, 0.2);
      
      &--modifier {
        font-weight: bold;
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }
`;

const ModuleExample = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  
  .module {
    padding: 1rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  }
`;

const ArchitectureExample = styled.div`
  .component {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    
    &-header {
      margin-bottom: 0.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #e0e0e0;
    }
    
    &-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
`;

const PracticalExample = styled.div`
  .card-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    
    &__item {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
      
      &:hover {
        transform: translateY(-4px);
      }
      
      &-header {
        padding: 1rem;
        background: #4a90e2;
        color: white;
      }
      
      &-content {
        padding: 1rem;
      }
      
      &-footer {
        padding: 1rem;
        border-top: 1px solid #e0e0e0;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

const Lesson14 = () => {
  return (
    <Container>
      <Title>CSS架构和组织</Title>
      <Description>
        CSS架构和组织是构建可维护和可扩展的样式系统的关键。本课程将介绍CSS的命名规范、
        模块化方法、架构模式以及最佳实践，帮助你建立一个结构清晰、易于维护的CSS代码库。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. CSS命名规范（BEM方法论）</h2>
      <Description>
        BEM（Block Element Modifier）是一种流行的CSS命名约定，它通过块、元素和修饰符的
        组合来创建清晰的类名结构。
      </Description>
      <BEMExample>
        <div className="block">
          Block
          <div className="block__element">Element</div>
          <div className="block__element block__element--modifier">
            Element with Modifier
          </div>
        </div>
      </BEMExample>
      <CodeBlock>{`.block {              /* 块 */
  &__element {      /* 元素 */
    &--modifier {   /* 修饰符 */
      /* 样式 */
    }
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. CSS模块化</h2>
      <Description>
        CSS模块化通过将样式分割成独立的、可重用的组件来提高代码的可维护性和复用性。
      </Description>
      <ModuleExample>
        <div className="module">
          <h3>模块标题</h3>
          <p>模块内容</p>
        </div>
        <div className="module">
          <h3>模块标题</h3>
          <p>模块内容</p>
        </div>
      </ModuleExample>
      <CodeBlock>{`/* _button.scss */
.button {
  /* 基础样式 */
}

/* _card.scss */
.card {
  /* 卡片样式 */
}

/* main.scss */
@import 'button';
@import 'card';`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. CSS架构模式</h2>
      <Description>
        了解常见的CSS架构模式，如ITCSS（Inverted Triangle CSS）和SMACSS（Scalable and
        Modular Architecture for CSS）。
      </Description>
      <ArchitectureExample>
        <div className="component">
          <div className="component-header">
            <h3>组件标题</h3>
          </div>
          <div className="component-content">
            <div>左侧内容</div>
            <div>右侧内容</div>
          </div>
        </div>
      </ArchitectureExample>
      <CodeBlock>{`/* 1. 设置（Settings）*/
$primary-color: #4a90e2;

/* 2. 工具（Tools）*/
@mixin flex-center { ... }

/* 3. 通用样式（Generic）*/
* { box-sizing: border-box; }

/* 4. 元素（Elements）*/
h1, p { ... }

/* 5. 对象（Objects）*/
.container { ... }

/* 6. 组件（Components）*/
.card { ... }

/* 7. 工具类（Utilities）*/
.text-center { ... }`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 样式组织最佳实践</h2>
      <Description>
        探讨CSS代码组织的最佳实践，包括文件结构、命名约定和代码注释等。
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>使用一致的命名规范</li>
          <li>组织清晰的文件结构</li>
          <li>避免过度嵌套</li>
          <li>合理使用CSS预处理器</li>
          <li>编写有意义的注释</li>
        </ul>
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        通过一个实际的组件示例，展示如何应用CSS架构和组织的原则。
      </Description>
      <PracticalExample>
        <div className="card-list">
          <div className="card-list__item">
            <div className="card-list__item-header">
              <h3>卡片标题</h3>
            </div>
            <div className="card-list__item-content">
              <p>卡片内容描述</p>
            </div>
            <div className="card-list__item-footer">
              <button className="btn">查看详情</button>
            </div>
          </div>
        </div>
      </PracticalExample>
      <CodeBlock>{`.card-list {
  &__item {
    &-header { ... }
    &-content { ... }
    &-footer { ... }
  }
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson14;
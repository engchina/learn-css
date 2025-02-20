import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';
import styled from 'styled-components';

const FrameworkDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  
  .framework-box {
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    
    &:hover {
      transform: translateY(-5px);
    }
    
    h3 {
      margin-bottom: 0.5rem;
      color: #4a90e2;
    }
  }
`;

const CustomizationDemo = styled.div`
  .theme-example {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    
    &--default {
      background: var(--primary-color, #4a90e2);
      color: white;
    }
    
    &--custom {
      background: var(--custom-primary, #ff6b6b);
      color: white;
    }
  }
`;

const ComponentDemo = styled.div`
  .component-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    
    .custom-component {
      padding: 1rem;
      background: #fff;
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      
      &__header {
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      
      &__content {
        color: #666;
      }
    }
  }
`;

const PerformanceDemo = styled.div`
  .optimization-example {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    
    .optimization-item {
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 6px;
      
      &__title {
        font-weight: 600;
        color: #4a90e2;
        margin-bottom: 0.5rem;
      }
      
      &__description {
        font-size: 0.9rem;
        color: #666;
      }
    }
  }
`;

const PracticalDemo = styled.div`
  .example-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    
    .example-card {
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      &__header {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #4a90e2;
      }
      
      &__content {
        color: #666;
      }
    }
  }
`;

const Lesson23 = () => {
  return (
    <Container>
      <Title>CSS框架集成最佳实践</Title>
      <Description>
        本课程将探讨如何有效地集成和使用CSS框架，包括框架选择策略、自定义主题方案、
        组件封装技巧、性能优化以及实际应用案例。通过这些内容，我们将学习如何更好地
        利用CSS框架来提高开发效率和代码质量。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 框架选择与集成策略</h2>
      <Description>
        如何选择合适的CSS框架并制定有效的集成策略：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>评估框架的特点和适用场景</li>
          <li>渐进式集成方案</li>
          <li>按需加载和模块化</li>
          <li>版本管理和更新策略</li>
        </ul>
      </Description>
      <DemoContainer>
        <FrameworkDemo>
          <div className="framework-box">
            <h3>Tailwind CSS</h3>
            <p>原子化CSS框架，高度可定制</p>
          </div>
          <div className="framework-box">
            <h3>Chakra UI</h3>
            <p>现代化组件库，主题系统强大</p>
          </div>
          <div className="framework-box">
            <h3>Styled Components</h3>
            <p>CSS-in-JS解决方案</p>
          </div>
        </FrameworkDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 自定义主题和样式覆盖</h2>
      <Description>
        学习如何自定义框架主题和覆盖默认样式：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>主题配置和变量系统</li>
          <li>样式覆盖策略</li>
          <li>设计令牌管理</li>
          <li>主题切换机制</li>
        </ul>
      </Description>
      <DemoContainer>
        <CustomizationDemo>
          <div className="theme-example theme-example--default">
            默认主题样式
          </div>
          <div className="theme-example theme-example--custom">
            自定义主题样式
          </div>
        </CustomizationDemo>
      </DemoContainer>
      <CodeBlock>{`:root {
  --primary-color: #4a90e2;
  --secondary-color: #357abd;
}

[data-theme="custom"] {
  --primary-color: #ff6b6b;
  --secondary-color: #ff5252;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 组件封装和复用</h2>
      <Description>
        探讨如何基于框架组件进行二次封装和复用：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>组件封装最佳实践</li>
          <li>样式继承和扩展</li>
          <li>组件通信和状态管理</li>
          <li>组件文档和示例</li>
        </ul>
      </Description>
      <DemoContainer>
        <ComponentDemo>
          <div className="component-wrapper">
            <div className="custom-component">
              <div className="custom-component__header">基础组件</div>
              <div className="custom-component__content">原始组件示例</div>
            </div>
            <div className="custom-component">
              <div className="custom-component__header">封装组件</div>
              <div className="custom-component__content">扩展功能示例</div>
            </div>
          </div>
        </ComponentDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 性能优化</h2>
      <Description>
        学习CSS框架使用中的性能优化技巧：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>按需加载和代码分割</li>
          <li>样式打包优化</li>
          <li>运行时性能优化</li>
          <li>缓存策略</li>
        </ul>
      </Description>
      <DemoContainer>
        <PerformanceDemo>
          <div className="optimization-example">
            <div className="optimization-item">
              <div className="optimization-item__title">按需加载</div>
              <div className="optimization-item__description">
                只加载必要的样式和组件
              </div>
            </div>
            <div className="optimization-item">
              <div className="optimization-item__title">代码分割</div>
              <div className="optimization-item__description">
                优化资源加载策略
              </div>
            </div>
          </div>
        </PerformanceDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        通过实际案例展示框架集成的最佳实践：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>企业级应用集成案例</li>
          <li>主题系统实现</li>
          <li>组件库开发</li>
          <li>性能优化实践</li>
        </ul>
      </Description>
      <DemoContainer>
        <PracticalDemo>
          <div className="example-container">
            <div className="example-card">
              <div className="example-card__header">企业级应用</div>
              <div className="example-card__content">
                展示如何在企业级应用中集成和使用CSS框架
              </div>
            </div>
            <div className="example-card">
              <div className="example-card__header">组件库开发</div>
              <div className="example-card__content">
                基于框架开发可复用的组件库
              </div>
            </div>
          </div>
        </PracticalDemo>
      </DemoContainer>
    </Container>
  );
};

export default Lesson23;
import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

const ComponentDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;

  .component-box {
    background: white;
    padding: 1.5rem;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);

    h3 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
      font-size: 0.9rem;
    }
  }
`;

const EncapsulationDemo = styled.div`
  .style-example {
    margin: 1rem 0;
    padding: 1.5rem;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);

    &--scoped {
      background: #e9ecef;
    }

    &--module {
      background: #f1f3f5;
    }
  }
`;

const ThemeDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  
  .theme-box {
    padding: 1.5rem;
    border-radius: 6px;
    text-align: center;
    
    &--light {
      background: #ffffff;
      color: #333;
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

const PerformanceDemo = styled.div`
  .optimization-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    
    .optimization-item {
      background: white;
      padding: 1.5rem;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      
      h3 {
        color: #2c3e50;
        margin-bottom: 0.5rem;
      }
      
      p {
        color: #666;
        font-size: 0.9rem;
      }
    }
  }
`;

const PracticalDemo = styled.div`
  .example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    
    .example-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      
      h3 {
        color: #2c3e50;
        margin-bottom: 1rem;
      }
      
      ul {
        color: #666;
        font-size: 0.9rem;
      }
    }
  }
`;

const Lesson30 = () => {
  return (
    <Container>
      <Title>CSS工程化与组件化</Title>
      <Description>
        本课程将深入探讨CSS工程化与组件化的实践，包括组件化设计模式、样式封装策略、
        主题系统实现、性能优化以及实际应用案例。通过这些内容，我们将学习如何构建
        可维护、可扩展的CSS架构。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 组件化设计模式</h2>
      <Description>
        探讨CSS组件化设计的核心模式和策略：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>原子化设计</li>
          <li>组件封装原则</li>
          <li>组件通信</li>
          <li>状态管理</li>
        </ul>
      </Description>
      <DemoContainer>
        <ComponentDemo>
          <div className="component-box">
            <h3>原子化组件</h3>
            <p>最小可复用单元</p>
          </div>
          <div className="component-box">
            <h3>复合组件</h3>
            <p>组件组合与通信</p>
          </div>
          <div className="component-box">
            <h3>容器组件</h3>
            <p>状态与逻辑管理</p>
          </div>
        </ComponentDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 样式封装策略</h2>
      <Description>
        学习不同的CSS样式封装方案：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>CSS Modules</li>
          <li>CSS-in-JS</li>
          <li>Scoped CSS</li>
          <li>Shadow DOM</li>
        </ul>
      </Description>
      <DemoContainer>
        <EncapsulationDemo>
          <div className="style-example">
            <h3>基础样式</h3>
            <p>全局样式定义</p>
          </div>
          <div className="style-example style-example--scoped">
            <h3>Scoped样式</h3>
            <p>组件级别隔离</p>
          </div>
          <div className="style-example style-example--module">
            <h3>CSS Modules</h3>
            <p>模块化样式管理</p>
          </div>
        </EncapsulationDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 主题系统实现</h2>
      <Description>
        实现灵活的主题切换系统：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>CSS变量系统</li>
          <li>主题配置管理</li>
          <li>动态主题切换</li>
          <li>主题继承机制</li>
        </ul>
      </Description>
      <DemoContainer>
        <ThemeDemo>
          <div className="theme-box theme-box--light">
            浅色主题
          </div>
          <div className="theme-box theme-box--dark">
            深色主题
          </div>
          <div className="theme-box theme-box--custom">
            自定义主题
          </div>
        </ThemeDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 性能优化</h2>
      <Description>
        CSS性能优化策略：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>选择器优化</li>
          <li>样式计算优化</li>
          <li>渲染性能</li>
          <li>加载优化</li>
        </ul>
      </Description>
      <DemoContainer>
        <PerformanceDemo>
          <div className="optimization-container">
            <div className="optimization-item">
              <h3>选择器优化</h3>
              <p>提高选择器效率</p>
            </div>
            <div className="optimization-item">
              <h3>渲染优化</h3>
              <p>减少重排重绘</p>
            </div>
            <div className="optimization-item">
              <h3>加载优化</h3>
              <p>按需加载策略</p>
            </div>
          </div>
        </PerformanceDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        展示工程化和组件化的实际应用：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>组件库开发</li>
          <li>主题系统实现</li>
          <li>性能优化实践</li>
          <li>工程化改造</li>
        </ul>
      </Description>
      <DemoContainer>
        <PracticalDemo>
          <div className="example-grid">
            <div className="example-card">
              <h3>组件库开发</h3>
              <ul className="list-disc pl-4">
                <li>组件设计规范</li>
                <li>文档系统</li>
                <li>版本管理</li>
              </ul>
            </div>
            <div className="example-card">
              <h3>工程化实践</h3>
              <ul className="list-disc pl-4">
                <li>构建优化</li>
                <li>自动化测试</li>
                <li>持续集成</li>
              </ul>
            </div>
          </div>
        </PracticalDemo>
      </DemoContainer>
    </Container>
  );
};

export default Lesson30;
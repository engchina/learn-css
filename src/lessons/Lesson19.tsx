import styled from 'styled-components';
import { Container, Title, Description, CodeBlock, DemoContainer } from '../components/Common';

const FrameworkDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;

  .framework-card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-4px);
    }

    h3 {
      color: #4a90e2;
      margin-bottom: 0.5rem;
    }
  }
`;

const ComponentDemo = styled.div`
  .component-showcase {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0;

    .component {
      flex: 1;
      min-width: 200px;
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);

      &__title {
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      &__content {
        color: #666;
      }
    }
  }
`;

const ThemeDemo = styled.div`
  .theme-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1rem 0;

    .theme-box {
      padding: 1.5rem;
      border-radius: 8px;
      text-align: center;

      &--light {
        background: #f8f9fa;
        color: #333;
      }

      &--dark {
        background: #343a40;
        color: white;
      }

      &--custom {
        background: linear-gradient(135deg, #4a90e2, #357abd);
        color: white;
      }
    }
  }
`;

const ResponsiveDemo = styled.div`
  .responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    margin: 1rem 0;

    .grid-item {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);

      @media (max-width: 768px) {
        padding: 0.75rem;
      }

      @media (max-width: 480px) {
        padding: 0.5rem;
      }
    }
  }
`;

const OptimizationDemo = styled.div`
  .optimization-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;

    .optimization-item {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);

      &__title {
        color: #4a90e2;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      &__description {
        color: #666;
      }
    }
  }
`;

const Lesson19 = () => {
  return (
    <Container>
      <Title>CSS框架和UI库的实践应用</Title>
      <Description>
        本课程将探讨现代CSS框架和UI库的实践应用，包括流行框架的特点、组件库的使用技巧、
        主题定制方法、响应式设计实践以及性能优化建议。通过这些内容，我们将学习如何更
        高效地开发和维护前端界面。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 常见CSS框架介绍</h2>
      <Description>
        了解主流CSS框架的特点和适用场景：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Bootstrap的栅格系统和组件</li>
          <li>Tailwind CSS的原子化CSS</li>
          <li>Material UI的设计系统</li>
          <li>Ant Design的企业级组件</li>
        </ul>
      </Description>
      <DemoContainer>
        <FrameworkDemo>
          <div className="framework-card">
            <h3>Bootstrap</h3>
            <p>最流行的响应式框架</p>
          </div>
          <div className="framework-card">
            <h3>Tailwind CSS</h3>
            <p>实用优先的CSS框架</p>
          </div>
          <div className="framework-card">
            <h3>Material UI</h3>
            <p>Google设计规范的实现</p>
          </div>
        </FrameworkDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 组件库使用技巧</h2>
      <Description>
        掌握UI组件库的高效使用方法：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>组件的按需加载</li>
          <li>组件的二次封装</li>
          <li>组件间的通信</li>
          <li>自定义组件开发</li>
        </ul>
      </Description>
      <DemoContainer>
        <ComponentDemo>
          <div className="component-showcase">
            <div className="component">
              <div className="component__title">基础组件</div>
              <div className="component__content">原始组件示例</div>
            </div>
            <div className="component">
              <div className="component__title">封装组件</div>
              <div className="component__content">二次封装示例</div>
            </div>
          </div>
        </ComponentDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 主题定制方法</h2>
      <Description>
        学习框架和组件库的主题定制：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>变量覆盖和定制</li>
          <li>主题切换机制</li>
          <li>样式覆盖技巧</li>
          <li>设计令牌管理</li>
        </ul>
      </Description>
      <DemoContainer>
        <ThemeDemo>
          <div className="theme-container">
            <div className="theme-box theme-box--light">默认主题</div>
            <div className="theme-box theme-box--dark">暗色主题</div>
            <div className="theme-box theme-box--custom">自定义主题</div>
          </div>
        </ThemeDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 响应式设计实践</h2>
      <Description>
        实现框架中的响应式设计：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>断点设置和管理</li>
          <li>栅格系统应用</li>
          <li>响应式组件</li>
          <li>移动优先策略</li>
        </ul>
      </Description>
      <DemoContainer>
        <ResponsiveDemo>
          <div className="responsive-grid">
            <div className="grid-item">响应式内容 1</div>
            <div className="grid-item">响应式内容 2</div>
            <div className="grid-item">响应式内容 3</div>
          </div>
        </ResponsiveDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 性能优化建议</h2>
      <Description>
        优化框架和组件库的性能：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>代码分割和懒加载</li>
          <li>Tree Shaking</li>
          <li>样式优化</li>
          <li>缓存策略</li>
        </ul>
      </Description>
      <DemoContainer>
        <OptimizationDemo>
          <div className="optimization-list">
            <div className="optimization-item">
              <div className="optimization-item__title">代码分割</div>
              <div className="optimization-item__description">
                按需加载组件和样式
              </div>
            </div>
            <div className="optimization-item">
              <div className="optimization-item__title">Tree Shaking</div>
              <div className="optimization-item__description">
                移除未使用的代码
              </div>
            </div>
          </div>
        </OptimizationDemo>
      </DemoContainer>
    </Container>
  );
};

export default Lesson19;
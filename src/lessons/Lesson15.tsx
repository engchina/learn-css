import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

const ComponentExample = styled.div`
  .custom-button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    background: var(--primary-color, #4a90e2);
    color: white;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: var(--primary-dark, #357abd);
    }

    &[data-size='large'] {
      padding: 0.75rem 1.5rem;
      font-size: 1.1em;
    }
  }
`;

const EncapsulationDemo = styled.div`
  .widget {
    --widget-bg: #f5f5f5;
    --widget-color: #333;
    background: var(--widget-bg);
    color: var(--widget-color);
    padding: 1rem;
    border-radius: 4px;

    &.dark {
      --widget-bg: #333;
      --widget-color: #fff;
    }
  }
`;

const ThemeSystem = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  .theme-card {
    padding: 1rem;
    border-radius: 8px;
    text-align: center;

    &.light {
      background: #fff;
      color: #333;
      border: 1px solid #eee;
    }

    &.dark {
      background: #333;
      color: #fff;
    }

    &.custom {
      background: linear-gradient(135deg, #4a90e2, #357abd);
      color: #fff;
    }
  }
`;

const StateManagement = styled.div`
  .toggle-component {
    --toggle-width: 60px;
    --toggle-height: 30px;

    display: inline-block;
    width: var(--toggle-width);
    height: var(--toggle-height);
    border-radius: calc(var(--toggle-height) / 2);
    background: #ccc;
    position: relative;
    cursor: pointer;
    transition: background 0.3s;

    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: calc(var(--toggle-height) - 4px);
      height: calc(var(--toggle-height) - 4px);
      border-radius: 50%;
      background: white;
      transition: transform 0.3s;
    }

    &.active {
      background: #4a90e2;

      &::after {
        transform: translateX(calc(var(--toggle-width) - var(--toggle-height)));
      }
    }
  }
`;

const PracticalExample = styled.div`
  .card-component {
    --card-padding: 1rem;
    --card-radius: 8px;
    --card-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    padding: var(--card-padding);
    border-radius: var(--card-radius);
    box-shadow: var(--card-shadow);
    background: white;

    &__header {
      margin-bottom: 1rem;
    }

    &__content {
      color: #666;
    }

    &__footer {
      margin-top: 1rem;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const Lesson15 = () => {
  return (
    <Container>
      <Title>CSS自定义组件和复用性</Title>
      <Description>
        本课程将探讨如何创建可复用的CSS组件，包括组件化设计模式、样式封装、主题系统的实现，
        以及组件状态管理等内容。通过这些技术，我们可以构建出更加模块化、可维护的样式系统。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. CSS组件化设计模式</h2>
      <Description>
        学习如何设计和实现可复用的CSS组件，使用CSS变量和属性选择器创建灵活的组件接口。
      </Description>
      <DemoContainer>
        <ComponentExample>
          <button className="custom-button">默认按钮</button>
          <button className="custom-button" data-size="large">大号按钮</button>
        </ComponentExample>
      </DemoContainer>
      <CodeBlock>{`.custom-button {
  --primary-color: #4a90e2;
  --primary-dark: #357abd;

  &[data-size='large'] {
    padding: 0.75rem 1.5rem;
    font-size: 1.1em;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 样式封装技术</h2>
      <Description>
        探索不同的CSS样式封装方法，包括CSS Modules、CSS-in-JS和Shadow DOM等技术。
      </Description>
      <DemoContainer>
        <EncapsulationDemo>
          <div className="widget">默认主题组件</div>
          <div className="widget dark">暗色主题组件</div>
        </EncapsulationDemo>
      </DemoContainer>
      <CodeBlock>{`.widget {
  --widget-bg: #f5f5f5;
  --widget-color: #333;

  &.dark {
    --widget-bg: #333;
    --widget-color: #fff;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 主题定制系统</h2>
      <Description>
        实现灵活的主题切换系统，使用CSS变量和类名切换来管理不同的主题样式。
      </Description>
      <DemoContainer>
        <ThemeSystem>
          <div className="theme-card light">浅色主题</div>
          <div className="theme-card dark">深色主题</div>
          <div className="theme-card custom">自定义主题</div>
        </ThemeSystem>
      </DemoContainer>
      <CodeBlock>{`.theme-card {
  &.light { background: #fff; color: #333; }
  &.dark { background: #333; color: #fff; }
  &.custom {
    background: linear-gradient(135deg, #4a90e2, #357abd);
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 组件状态管理</h2>
      <Description>
        学习如何使用CSS管理组件的不同状态，包括悬停、激活、禁用等状态的样式处理。
      </Description>
      <DemoContainer>
        <StateManagement>
          <div className="toggle-component active" />
          <div className="toggle-component" />
        </StateManagement>
      </DemoContainer>
      <CodeBlock>{`.toggle-component {
  --toggle-width: 60px;
  --toggle-height: 30px;

  &.active {
    background: #4a90e2;
    &::after {
      transform: translateX(calc(
        var(--toggle-width) - var(--toggle-height)
      ));
    }
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 最佳实践案例</h2>
      <Description>
        通过实际案例展示如何应用组件化和复用性原则，创建可维护的组件库。
      </Description>
      <DemoContainer>
        <PracticalExample>
          <div className="card-component">
            <div className="card-component__header">
              <h3>可复用卡片组件</h3>
            </div>
            <div className="card-component__content">
              <p>使用BEM命名规范和CSS变量创建的可复用组件</p>
            </div>
            <div className="card-component__footer">
              <button className="custom-button">查看详情</button>
            </div>
          </div>
        </PracticalExample>
      </DemoContainer>
      <CodeBlock>{`.card-component {
  --card-padding: 1rem;
  --card-radius: 8px;
  --card-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &__header { margin-bottom: 1rem; }
  &__content { color: #666; }
  &__footer {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
  }
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson15;
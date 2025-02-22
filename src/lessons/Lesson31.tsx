// 按压效果示例
import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

const PressEffectDemo = styled.div`
  display: flex;
  gap: 1rem;

  button {
    /* 布局 */
    display: inline-block;
    padding: 0.75rem 1.5rem;

    /* 盒模型 */
    border: none;
    border-radius: 0.25rem;

    /* 外观 */
    background-color: #4a90e2;
    color: white;
    cursor: pointer;

    /* 动画 */
    transition: all 0.2s ease;

    &.scale:active {
      transform: scale(0.95);
    }

    &.translate:active {
      transform: translateY(0.125rem);
    }
  }
`;

// 悬停效果示例
const HoverEffectDemo = styled.div`
  display: flex;
  gap: 1rem;

  .hover-card {
    /* 布局 */
    padding: 1.5rem;

    /* 盒模型 */
    border-radius: 0.5rem;

    /* 外观 */
    background: white;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);

    /* 动画 */
    transition: all 0.3s ease;

    &.scale:hover {
      transform: scale(1.05);
    }

    &.shadow:hover {
      box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
    }
  }
`;

// 过渡动画示例
const TransitionDemo = styled.div`
  display: flex;
  gap: 1rem;

  .transition-button {
    /* 布局 */
    position: relative;
    display: inline-block;
    padding: 0.75rem 1.5rem;

    /* 盒模型 */
    border: none;
    border-radius: 0.25rem;

    /* 外观 */
    background-color: #4a90e2;
    color: white;
    cursor: pointer;

    /* 动画 */
    transition: all 0.3s ease;

    .icon {
      position: absolute;
      right: 1rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      background-color: #357abd;

      .icon {
        opacity: 1;
      }
    }
  }
`;

// 复杂动画示例
const ComplexAnimationDemo = styled.div`
  /* 布局 */
  display: flex;
  align-items: center;
  gap: 2rem;

  .spinner {
    /* 布局 */
    position: relative;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;

    /* 盒模型 */
    border: 0.25rem solid #f3f3f3;
    border-top: 0.25rem solid #4a90e2;
    border-radius: 50%;

    /* 动画 */
    animation: spin 1s linear infinite;
  }

  .bounce {
    /* 布局 */
    position: relative;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;

    /* 盒模型 */
    border-radius: 50%;

    /* 外观 */
    background-color: #4a90e2;

    /* 动画 */
    animation: bounce 0.5s ease infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-0.625rem); }
  }
`;

// 其他交互效果示例
const OtherEffectsDemo = styled.div`
  /* 布局 */
  display: flex;
  gap: 1rem;

  .card {
    /* 布局 */
    width: 12.5rem;
    height: 7.5rem;
    padding: 1rem;

    /* 盒模型 */
    border-radius: 0.5rem;

    /* 外观 */
    background: white;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    cursor: pointer;

    /* 动画 */
    transition: all 0.3s ease;

    &.highlight:active {
      background-color: #e0e0e0;
    }

    &.rotate:hover {
      transform: perspective(62.5rem) rotateY(10deg);
    }
  }
`;

const Lesson31 = () => {
  return (
    <Container>
      <Title>CSS交互动效设计</Title>
      <Description>
        本课程将深入探讨CSS中常见的交互动效设计，包括按压效果、悬停效果、过渡动画和复杂动画等。
        通过学习这些效果的实现方式和适用场景，你将能够创建更加生动和富有交互性的用户界面。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 按压效果</h2>
      <Description>
        按压效果通常用于按钮等可点击元素，通过视觉反馈增强用户体验：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>缩放效果（Scale）</li>
          <li>位移效果（Translate）</li>
        </ul>
      </Description>
      <DemoContainer>
        <PressEffectDemo>
          <button className="scale">缩放效果</button>
          <button className="translate">位移效果</button>
        </PressEffectDemo>
      </DemoContainer>
      <CodeBlock>{`button:active {
  transform: scale(0.95);
  transition: transform 0.1s ease;
}

button:active {
  transform: translateY(2px);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 悬停效果</h2>
      <Description>
        悬停效果能够提供即时的视觉反馈，增强界面的交互性：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>放大效果</li>
          <li>阴影效果</li>
        </ul>
      </Description>
      <DemoContainer>
        <HoverEffectDemo>
          <div className="hover-card scale">放大效果</div>
          <div className="hover-card shadow">阴影效果</div>
        </HoverEffectDemo>
      </DemoContainer>
      <CodeBlock>{`.card:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 过渡动画</h2>
      <Description>
        过渡动画可以让状态变化更加平滑自然：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>颜色渐变</li>
          <li>透明度变化</li>
        </ul>
      </Description>
      <DemoContainer>
        <TransitionDemo>
          <button className="transition-button">
            悬停效果
            <span className="icon">→</span>
          </button>
        </TransitionDemo>
      </DemoContainer>
      <CodeBlock>{`button {
  transition: background-color 0.3s ease;
}

.icon {
  opacity: 0;
  transition: opacity 0.3s ease;
}

button:hover .icon {
  opacity: 1;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 复杂动画</h2>
      <Description>
        使用@keyframes创建更复杂的动画效果：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>旋转动画</li>
          <li>弹跳动画</li>
        </ul>
      </Description>
      <DemoContainer>
        <ComplexAnimationDemo>
          <div className="spinner" />
          <div className="bounce" />
        </ComplexAnimationDemo>
      </DemoContainer>
      <CodeBlock>{`@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.spinner {
  animation: spin 1s linear infinite;
}

.bounce {
  animation: bounce 0.5s ease infinite;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 其他交互效果</h2>
      <Description>
        其他常用的交互效果示例：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>背景高亮</li>
          <li>3D变换</li>
        </ul>
      </Description>
      <DemoContainer>
        <OtherEffectsDemo>
          <div className="card highlight">点击高亮</div>
          <div className="card rotate">3D旋转</div>
        </OtherEffectsDemo>
      </DemoContainer>
      <CodeBlock>{`.card:active {
  background-color: #e0e0e0;
}

.card {
  transform: perspective(1000px) rotateY(10deg);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">性能优化建议</h2>
      <Description>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>优先使用 transform 和 opacity：
            <ul className="list-disc pl-6 mt-1">
              <li>这些属性可以触发GPU加速</li>
              <li>避免重排（reflow）和重绘（repaint）</li>
            </ul>
          </li>
          <li>合理使用过渡时间：
            <ul className="list-disc pl-6 mt-1">
              <li>按压效果：100-200ms</li>
              <li>悬停效果：200-300ms</li>
              <li>页面切换：300-500ms</li>
            </ul>
          </li>
          <li>动画性能优化：
            <ul className="list-disc pl-6 mt-1">
              <li>使用 will-change 提示浏览器</li>
              <li>避免同时动画过多元素</li>
              <li>适当使用 requestAnimationFrame</li>
            </ul>
          </li>
        </ul>
      </Description>
    </Container>
  );
};

export default Lesson31;
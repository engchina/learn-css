import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';
import styled from 'styled-components';

const InteractionDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;

  .interaction-box {
    height: 100px;
    background: #4a90e2;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-5px);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

const GestureDemo = styled.div`
  .gesture-area {
    height: 200px;
    background: #f5f5f5;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: none;
    user-select: none;

    .draggable {
      width: 100px;
      height: 100px;
      background: #4a90e2;
      border-radius: 8px;
      cursor: grab;
      transition: transform 0.2s;

      &:active {
        cursor: grabbing;
        transform: scale(1.05);
      }
    }
  }
`;

const MicroInteractionDemo = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;

  .micro-button {
    padding: 0.5rem 1rem;
    background: #4a90e2;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.3s, height 0.3s;
    }

    &:active::after {
      width: 200px;
      height: 200px;
    }
  }
`;

const PerformanceDemo = styled.div`
  .animation-container {
    height: 200px;
    position: relative;
    overflow: hidden;

    .moving-element {
      width: 50px;
      height: 50px;
      background: #4a90e2;
      position: absolute;
      border-radius: 50%;
      will-change: transform;
      animation: moveAround 4s infinite;

      @keyframes moveAround {
        0% { transform: translate(0, 0); }
        25% { transform: translate(calc(100% - 50px), 0); }
        50% { transform: translate(calc(100% - 50px), calc(100% - 50px)); }
        75% { transform: translate(0, calc(100% - 50px)); }
        100% { transform: translate(0, 0); }
      }
    }
  }
`;

const PracticalDemo = styled.div`
  .card {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card-content {
      opacity: 0.8;
      transform: translateY(10px);
      transition: all 0.3s 0.1s;
    }

    &:hover .card-content {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Lesson24 = () => {
  return (
    <Container>
      <Title>CSS动画交互设计</Title>
      <Description>
        本课程将深入探讨CSS动画在交互设计中的应用，包括高级动画交互技巧、手势动画设计、
        微交互效果、动画性能优化以及实际应用案例。通过这些内容，我们将学习如何创建流畅、
        自然的用户交互体验。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 高级动画交互技巧</h2>
      <Description>
        探讨复杂动画交互的实现方法：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>动画时序函数的选择</li>
          <li>多状态动画过渡</li>
          <li>组合动画效果</li>
          <li>动画触发时机控制</li>
        </ul>
      </Description>
      <DemoContainer>
        <InteractionDemo>
          <div className="interaction-box">悬停和点击交互</div>
          <div className="interaction-box">状态过渡效果</div>
        </InteractionDemo>
      </DemoContainer>
      <CodeBlock>{`/* 高级动画交互 */
.interaction-element {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover { transform: translateY(-5px); }
  &:active { transform: scale(0.95); }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 手势动画设计</h2>
      <Description>
        实现基于用户手势的动画效果：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>拖拽动画</li>
          <li>滑动过渡</li>
          <li>缩放手势</li>
          <li>触摸反馈</li>
        </ul>
      </Description>
      <DemoContainer>
        <GestureDemo>
          <div className="gesture-area">
            <div className="draggable">拖拽元素</div>
          </div>
        </GestureDemo>
      </DemoContainer>
      <CodeBlock>{`/* 手势动画 */
.draggable {
  cursor: grab;
  transition: transform 0.2s;

  &:active {
    cursor: grabbing;
    transform: scale(1.05);
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 微交互效果</h2>
      <Description>
        设计细节交互动画：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>按钮点击效果</li>
          <li>输入框焦点动画</li>
          <li>加载状态过渡</li>
          <li>提示信息动画</li>
        </ul>
      </Description>
      <DemoContainer>
        <MicroInteractionDemo>
          <button className="micro-button">点击效果</button>
          <button className="micro-button">涟漪动画</button>
        </MicroInteractionDemo>
      </DemoContainer>
      <CodeBlock>{`/* 微交互动画 */
.button {
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
  }

  &:active::after {
    width: 200px;
    height: 200px;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 动画性能优化</h2>
      <Description>
        优化动画性能和流畅度：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>使用transform和opacity</li>
          <li>硬件加速</li>
          <li>动画帧率优化</li>
          <li>减少重排重绘</li>
        </ul>
      </Description>
      <DemoContainer>
        <PerformanceDemo>
          <div className="animation-container">
            <div className="moving-element" />
          </div>
        </PerformanceDemo>
      </DemoContainer>
      <CodeBlock>{`/* 性能优化 */
.optimized-animation {
  transform: translateZ(0);
  will-change: transform;
  animation: moveAround 4s infinite;

  @keyframes moveAround {
    0% { transform: translate(0, 0); }
    100% { transform: translate(100%, 0); }
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        展示动画交互在实际项目中的应用：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>卡片翻转动画</li>
          <li>列表项过渡</li>
          <li>导航菜单动画</li>
          <li>页面切换效果</li>
        </ul>
      </Description>
      <DemoContainer>
        <PracticalDemo>
          <div className="card">
            <h3 className="text-lg font-semibold">交互卡片示例</h3>
            <div className="card-content mt-2">
              展示实际应用中的动画交互效果
            </div>
          </div>
        </PracticalDemo>
      </DemoContainer>
    </Container>
  );
};

export default Lesson24;
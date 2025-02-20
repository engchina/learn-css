import { Container, Title, Description, DemoContainer, CodeBlock } from "../components/Common";
import styled from "styled-components";

const ComplexGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "nav footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 400px;

  > div {
    padding: 1rem;
    background: #4a90e2;
    color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
`;

const AnimatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  
  > div {
    background: #4a90e2;
    color: white;
    padding: 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(74, 144, 226, 0.3);
    }
  }
`;

const ResponsiveGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense;

  > div {
    background: #4a90e2;
    color: white;
    padding: 1rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-of-type(4n) {
      grid-column: span 2;
      grid-row: span 2;
      background: #357abd;
    }
  }
`;

const PerformanceGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  > div {
    background: #4a90e2;
    color: white;
    padding: 1rem;
    border-radius: 4px;
    will-change: transform;
    transform: translateZ(0);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudyGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  .case-card {
    background: #4a90e2;
    color: white;
    padding: 1.5rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      opacity: 0.9;
    }
  }
`;

const Lesson27 = () => {
  return (
    <Container>
      <Title>CSS网格布局高级应用和最佳实践</Title>
      <Description>
        本课程将深入探讨CSS Grid布局的高级应用和最佳实践，包括复杂网格布局设计、网格布局动画效果、
        响应式网格系统、性能优化以及实际应用案例。通过这些内容，我们将掌握如何构建更加灵活、高效
        且易于维护的网格布局系统。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 复杂网格布局设计</h2>
      <Description>
        探讨如何设计和实现复杂的网格布局结构：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>嵌套网格布局</li>
          <li>混合定位策略</li>
          <li>网格区域命名</li>
          <li>自动布局算法</li>
        </ul>
      </Description>
      <DemoContainer>
        <ComplexGrid>
          <div style={{ gridArea: 'header' }}>页头区域</div>
          <div style={{ gridArea: 'nav' }}>导航栏</div>
          <div style={{ gridArea: 'main' }}>主要内容</div>
          <div style={{ gridArea: 'aside' }}>侧边栏</div>
          <div style={{ gridArea: 'footer' }}>页脚区域</div>
        </ComplexGrid>
      </DemoContainer>
      <CodeBlock>{`/* 复杂网格布局 */
.complex-grid {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "nav footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 网格布局动画效果</h2>
      <Description>
        学习如何为网格布局添加流畅的动画效果：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>网格项目过渡</li>
          <li>布局变换动画</li>
          <li>hover效果设计</li>
          <li>性能优化技巧</li>
        </ul>
      </Description>
      <DemoContainer>
        <AnimatedGrid>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>动画项目 {i + 1}</div>
          ))}
        </AnimatedGrid>
      </DemoContainer>
      <CodeBlock>{`/* 网格动画效果 */
.grid-item {
  transition: all 0.3s ease;
  transform: translateZ(0);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(74, 144, 226, 0.3);
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 响应式网格系统</h2>
      <Description>
        构建灵活的响应式网格布局系统：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>自适应列宽</li>
          <li>动态行高</li>
          <li>断点管理</li>
          <li>内容流动控制</li>
        </ul>
      </Description>
      <DemoContainer>
        <ResponsiveGrid>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i}>响应式项目 {i + 1}</div>
          ))}
        </ResponsiveGrid>
      </DemoContainer>
      <CodeBlock>{`/* 响应式网格系统 */
.responsive-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  );
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 性能优化</h2>
      <Description>
        探讨网格布局的性能优化策略：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>GPU加速</li>
          <li>重排优化</li>
          <li>动画性能</li>
          <li>渲染优化</li>
        </ul>
      </Description>
      <DemoContainer>
        <PerformanceGrid>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>优化示例 {i + 1}</div>
          ))}
        </PerformanceGrid>
      </DemoContainer>
      <CodeBlock>{`/* 性能优化技巧 */
.grid-item {
  will-change: transform;
  transform: translateZ(0);
  contain: layout style paint;
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        展示网格布局在实际项目中的应用：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>图片画廊</li>
          <li>仪表盘布局</li>
          <li>卡片网格</li>
          <li>杂志布局</li>
        </ul>
      </Description>
      <DemoContainer>
        <CaseStudyGrid>
          <div className="case-card">
            <h3>图片画廊</h3>
            <p>响应式图片网格布局</p>
          </div>
          <div className="case-card">
            <h3>仪表盘</h3>
            <p>数据可视化布局</p>
          </div>
          <div className="case-card">
            <h3>卡片网格</h3>
            <p>产品展示布局</p>
          </div>
        </CaseStudyGrid>
      </DemoContainer>
      <CodeBlock>{`/* 实际应用示例 */
.gallery-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  );
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(300px, 1fr)
    );
  }
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson27;
import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

const FlexContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f0f9ff;
  border: 2px dashed #4a90e2;
  min-height: 200px;
`;

const FlexItem = styled.div`
  padding: 1rem;
  background-color: #4a90e2;
  color: white;
  margin: 0.5rem;
  text-align: center;
  border-radius: 4px;
`;

const GridContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f0f9ff;
  border: 2px dashed #4a90e2;
`;

const GridItem = styled.div<{ area?: string }>`
  padding: 1rem;
  background-color: #4a90e2;
  color: white;
  text-align: center;
  border-radius: 4px;
  ${props => props.area && `grid-area: ${props.area};`}
`;

const AdvancedGrid = styled(GridContainer)`
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "sidebar footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 400px;
  gap: 1rem;
`;

const ResponsiveGrid = styled(GridContainer)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense;
  gap: 1rem;

  > div:nth-child(4n) {
    grid-column: span 2;
    grid-row: span 2;
    background-color: #357abd;
  }
`;

const AnimatedGrid = styled(GridContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  > div {
    transition: transform 0.3s, background-color 0.3s;
    
    &:hover {
      transform: scale(1.05);
      background-color: #357abd;
    }
  }
`;

const CommonLayoutGrid = styled(GridContainer)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  padding: 2rem;

  .header {
    grid-column: span 12;
    background-color: #4a90e2;
    padding: 1rem;
    color: white;
    text-align: center;
  }

  .sidebar {
    grid-column: span 3;
    background-color: #357abd;
    padding: 1rem;
    color: white;
  }

  .main {
    grid-column: span 9;
    background-color: #4a90e2;
    padding: 1rem;
    color: white;
  }

  .footer {
    grid-column: span 12;
    background-color: #4a90e2;
    padding: 1rem;
    color: white;
    text-align: center;
  }

  @media (max-width: 768px) {
    .sidebar,
    .main {
      grid-column: span 12;
    }
  }
`;

const HybridLayout = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f9ff;
  border: 2px dashed #4a90e2;

  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
  }

  .card {
    flex: 1 1 300px;
    background-color: #4a90e2;
    color: white;
    padding: 1rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card-header {
    font-weight: bold;
  }

  .card-content {
    flex: 1;
  }

  .card-footer {
    display: flex;
    justify-content: flex-end;
  }
`;

const Lesson2 = () => {
  return (
    <Container>
      <Title>现代布局系统：Flexbox与Grid</Title>
      <Description>
        本课程将全面介绍CSS中两个最强大的布局系统：Flexbox和Grid。通过学习这两种布局方式，
        你将能够创建从简单到复杂的各种现代网页布局。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">第一部分：Flexbox布局</h2>
      <Description>
        Flexbox是一种一维布局模型，它提供了强大的空间分布和对齐能力。
        通过设置容器（flex container）和项目（flex items）的属性，可以轻松实现各种灵活的布局。
      </Description>

      <h3 className="text-lg font-semibold mt-4 mb-2">1. 基本的Flex容器</h3>
      <Description>
        设置 <code>display: flex</code> 创建一个flex容器，其直接子元素将成为flex项目。
      </Description>
      <FlexContainer className="flex">
        <FlexItem>项目 1</FlexItem>
        <FlexItem>项目 2</FlexItem>
        <FlexItem>项目 3</FlexItem>
      </FlexContainer>
      <CodeBlock>{`display: flex;  // 创建flex容器`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-4 mb-2">2. 主轴对齐 (justify-content)</h3>
      <Description>
        justify-content属性定义了flex项目在主轴上的对齐方式。
      </Description>
      <FlexContainer className="flex justify-between">
        <FlexItem>项目 1</FlexItem>
        <FlexItem>项目 2</FlexItem>
        <FlexItem>项目 3</FlexItem>
      </FlexContainer>
      <CodeBlock>{`justify-content: space-between;  // 项目之间平均分配空间`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-4 mb-2">3. 交叉轴对齐 (align-items)</h3>
      <Description>
        align-items属性定义了flex项目在交叉轴上的对齐方式。
      </Description>
      <FlexContainer className="flex items-center" style={{ height: '300px' }}>
        <FlexItem>项目 1</FlexItem>
        <FlexItem>项目 2</FlexItem>
        <FlexItem>项目 3</FlexItem>
      </FlexContainer>
      <CodeBlock>{`align-items: center;  // 在交叉轴上居中对齐`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">第二部分：Grid布局</h2>
      <Description>
        Grid布局是CSS中最强大的布局系统，它提供了一个基于网格的二维布局系统。
        通过Grid布局，我们可以创建更复杂和灵活的页面结构。
      </Description>

      <h3 className="text-lg font-semibold mt-4 mb-2">1. 基础网格布局</h3>
      <Description>
        使用Grid创建基本的网格布局结构。
      </Description>
      <GridContainer style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
      }}>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
      </GridContainer>
      <CodeBlock>{`display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-4 mb-2">2. 网格区域布局</h3>
      <Description>
        使用grid-template-areas创建复杂的布局结构。
      </Description>
      <AdvancedGrid>
        <GridItem area="header">页头区域</GridItem>
        <GridItem area="sidebar">侧边栏</GridItem>
        <GridItem area="content">主要内容</GridItem>
        <GridItem area="footer">页脚区域</GridItem>
      </AdvancedGrid>
      <CodeBlock>{`grid-template-areas:
  "header header header"
  "sidebar content content"
  "sidebar footer footer";
grid-template-columns: 200px 1fr 1fr;
grid-template-rows: auto 1fr auto;`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-4 mb-2">3. 响应式网格设计</h3>
      <Description>
        使用auto-fit和minmax创建自适应的网格布局。
      </Description>
      <ResponsiveGrid>
        {Array.from({ length: 8 }).map((_, i) => (
          <GridItem key={i}>项目 {i + 1}</GridItem>
        ))}
      </ResponsiveGrid>
      <CodeBlock>{`display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-auto-rows: minmax(100px, auto);
grid-auto-flow: dense;`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-4 mb-2">4. 网格动画效果</h3>
      <Description>
        为网格布局添加动画和交互效果。
      </Description>
      <AnimatedGrid>
        {Array.from({ length: 6 }).map((_, i) => (
          <GridItem key={i}>悬停效果 {i + 1}</GridItem>
        ))}
      </AnimatedGrid>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 常见网页布局模式</h2>
      <Description>
        使用Grid实现经典的12列网格系统，适应不同屏幕尺寸。
      </Description>
      <CommonLayoutGrid>
        <div className="header">页头</div>
        <div className="sidebar">侧边栏</div>
        <div className="main">主要内容区域</div>
        <div className="footer">页脚</div>
      </CommonLayoutGrid>
      <CodeBlock>{`/* 12列网格系统 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .sidebar,
  .main {
    grid-column: span 12;
  }
}}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">6. Flexbox和Grid混合布局</h2>
      <Description>
        展示如何结合Flexbox和Grid的优势，创建复杂而灵活的布局。
      </Description>
      <HybridLayout>
        <div className="card-container">
          <div className="card">
            <div className="card-header">卡片标题 1</div>
            <div className="card-content">使用Flexbox处理卡片内部布局</div>
            <div className="card-footer">了解更多</div>
          </div>
          <div className="card">
            <div className="card-header">卡片标题 2</div>
            <div className="card-content">Grid负责整体页面结构</div>
            <div className="card-footer">了解更多</div>
          </div>
          <div className="card">
            <div className="card-header">卡片标题 3</div>
            <div className="card-content">响应式设计轻松实现</div>
            <div className="card-footer">了解更多</div>
          </div>
        </div>
      </HybridLayout>
      <CodeBlock>{`/* 混合布局示例 */
.container {
  display: grid;  /* 使用Grid处理整体布局 */
}

.card-container {
  display: flex;  /* 使用Flexbox处理卡片流式布局 */
  flex-wrap: wrap;
}

.card {
  flex: 1 1 300px;  /* 弹性基准值确保卡片合理换行 */
  display: flex;
  flex-direction: column;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">布局系统最佳实践</h2>
      <Description>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>根据布局需求选择合适的布局系统：
            <ul className="list-disc pl-6 mt-1">
              <li>一维布局（行或列）使用Flexbox</li>
              <li>二维布局（行和列）使用Grid</li>
              <li>复杂布局考虑混合使用两种系统</li>
            </ul>
          </li>
          <li>响应式设计考虑：
            <ul className="list-disc pl-6 mt-1">
              <li>使用flex-wrap实现Flexbox的自适应</li>
              <li>使用auto-fit/auto-fill实现Grid的响应式</li>
              <li>合理使用媒体查询调整布局</li>
            </ul>
          </li>
          <li>性能优化：
            <ul className="list-disc pl-6 mt-1">
              <li>避免过度嵌套布局结构</li>
              <li>使用CSS containment优化渲染性能</li>
              <li>合理使用will-change属性</li>
              <li>优先使用transform和opacity实现动画</li>
            </ul>
          </li>
          <li>可维护性建议：
            <ul className="list-disc pl-6 mt-1">
              <li>遵循一致的命名规范</li>
              <li>抽离可复用的布局组件</li>
              <li>使用CSS变量管理布局参数</li>
              <li>编写清晰的布局文档</li>
            </ul>
          </li>
        </ul>
      </Description>
    </Container>
  );
};

export default Lesson2;
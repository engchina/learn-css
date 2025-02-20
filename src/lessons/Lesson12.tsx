import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  margin: 1rem 0;
  line-height: 1.6;
  color: #666;
`;

const DemoContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f0f9ff;
  border: 2px dashed #4a90e2;
`;

const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  overflow-x: auto;
`;

const GridDemo = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const GridItem = styled.div<{ area?: string }>`
  padding: 1rem;
  background-color: #4a90e2;
  color: white;
  text-align: center;
  border-radius: 4px;
  ${props => props.area && `grid-area: ${props.area};`}
`;

const SubgridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 4px;
`;

const SubgridItem = styled.div`
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  gap: 0.5rem;
  background-color: #e3f2fd;
  padding: 0.5rem;
  border-radius: 4px;

  > div {
    background-color: #4a90e2;
    color: white;
    padding: 0.5rem;
    text-align: center;
    border-radius: 4px;
  }
`;

const AnimatedGrid = styled(GridDemo)`
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

const ResponsiveGrid = styled(GridDemo)`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense;

  > div:nth-child(4n) {
    grid-column: span 2;
    grid-row: span 2;
    background-color: #357abd;
  }
`;

const DashboardGrid = styled(GridDemo)`
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "sidebar stats stats"
    "footer footer footer";
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: auto 1fr auto auto;
  min-height: 500px;

  @media (max-width: 768px) {
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "stats"
      "footer";
    grid-template-columns: 1fr;
  }
`;

const Lesson12 = () => {
  return (
    <Container>
      <Title>CSS网格布局进阶</Title>
      <Description>
        本课程将深入探讨CSS Grid布局的高级特性和实践应用，包括子网格（subgrid）、
        网格布局的响应式设计、动画效果以及复杂布局的实现方案。通过这些进阶知识，
        我们可以创建更加灵活和专业的网页布局。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 网格布局的高级特性</h2>
      <Description>
        使用grid-template-areas和grid-area创建复杂的布局结构，实现更灵活的内容排列。
      </Description>
      <DemoContainer>
        <DashboardGrid>
          <GridItem area="header">页头区域</GridItem>
          <GridItem area="sidebar">侧边栏</GridItem>
          <GridItem area="main">主要内容区域</GridItem>
          <GridItem area="stats">统计信息</GridItem>
          <GridItem area="footer">页脚区域</GridItem>
        </DashboardGrid>
      </DemoContainer>
      <CodeBlock>{`grid-template-areas:
  "header header header"
  "sidebar main main"
  "sidebar stats stats"
  "footer footer footer";
grid-template-columns: 250px 1fr 1fr;
grid-template-rows: auto 1fr auto auto;`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 子网格（Subgrid）</h2>
      <Description>
        使用subgrid特性创建与父网格对齐的嵌套网格布局。
      </Description>
      <DemoContainer>
        <SubgridContainer>
          {Array.from({ length: 4 }).map((_, i) => (
            <SubgridItem key={i}>
              <div>标题 {i + 1}</div>
              <div>内容描述</div>
              <div>操作按钮</div>
            </SubgridItem>
          ))}
        </SubgridContainer>
      </DemoContainer>
      <CodeBlock>{`display: grid;
grid-template-rows: subgrid;
grid-row: span 3;
// 子元素会继承父网格的行高和对齐方式`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 网格布局的响应式设计</h2>
      <Description>
        结合auto-fit、minmax和grid-auto-flow创建自适应的网格布局。
      </Description>
      <DemoContainer>
        <ResponsiveGrid>
          {Array.from({ length: 8 }).map((_, i) => (
            <GridItem key={i}>项目 {i + 1}</GridItem>
          ))}
        </ResponsiveGrid>
      </DemoContainer>
      <CodeBlock>{`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-auto-rows: minmax(100px, auto);
grid-auto-flow: dense;

// 特殊项目样式
> div:nth-child(4n) {
  grid-column: span 2;
  grid-row: span 2;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 网格布局的动画效果</h2>
      <Description>
        为网格项目添加过渡和变换效果，创建动态的网格布局。
      </Description>
      <DemoContainer>
        <AnimatedGrid>
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={i}>悬停效果 {i + 1}</GridItem>
          ))}
        </AnimatedGrid>
      </DemoContainer>
      <CodeBlock>{`> div {
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: #357abd;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        以下是一些网格布局的最佳实践和注意事项：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>使用命名的网格线和区域提高代码可维护性</li>
          <li>合理使用auto-fit和auto-fill实现响应式布局</li>
          <li>利用grid-auto-flow优化内容流动方向</li>
          <li>考虑使用subgrid实现复杂的嵌套布局</li>
          <li>注意网格布局在不同设备上的表现</li>
        </ul>
      </Description>
    </Container>
  );
};

export default Lesson12;
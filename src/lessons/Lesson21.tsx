import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const GridItem = styled.div<{ area?: string }>`
  background-color: #4a90e2;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  ${props => props.area && `grid-area: ${props.area};`}
`;

const AdvancedGrid = styled(GridContainer)`
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "sidebar footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 400px;
`;

const SubgridContainer = styled(GridContainer)`
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const SubgridItem = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  > div {
    padding: 1rem;
    background-color: #4a90e2;
    color: white;
    border-radius: 4px;
  }
`;

const ResponsiveGrid = styled(GridContainer)`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense;

  > div:nth-child(4n) {
    grid-column: span 2;
    grid-row: span 2;
    background-color: #357abd;
  }
`;

const AnimatedGrid = styled(GridContainer)`
  grid-template-columns: repeat(3, 1fr);
  
  > div {
    transition: transform 0.3s, background-color 0.3s;
    
    &:hover {
      transform: scale(1.05);
      background-color: #357abd;
    }
  }
`;

const Lesson21 = () => {
  return (
    <Container>
      <Title>CSS网格布局高级应用</Title>
      <Description>
        本课程将深入探讨CSS Grid布局的高级应用技巧，包括复杂的网格布局结构、子网格（subgrid）、
        响应式网格设计、网格动画效果以及实际应用案例。通过这些进阶知识，我们可以创建更加灵活和
        专业的网页布局。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 高级网格布局结构</h2>
      <Description>
        使用grid-template-areas和grid-area创建复杂的布局结构。
      </Description>
      <DemoContainer>
        <AdvancedGrid>
          <GridItem area="header">页头区域</GridItem>
          <GridItem area="sidebar">侧边栏</GridItem>
          <GridItem area="content">主要内容</GridItem>
          <GridItem area="footer">页脚区域</GridItem>
        </AdvancedGrid>
      </DemoContainer>
      <CodeBlock>{`grid-template-areas:
  "header header header"
  "sidebar content content"
  "sidebar footer footer";
grid-template-columns: 200px 1fr 1fr;
grid-template-rows: auto 1fr auto;`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 子网格（Subgrid）应用</h2>
      <Description>
        使用子网格特性创建对齐的嵌套布局结构。
      </Description>
      <DemoContainer>
        <SubgridContainer>
          {Array.from({ length: 3 }).map((_, i) => (
            <SubgridItem key={i}>
              <div>标题 {i + 1}</div>
              <div>内容描述</div>
              <div>操作按钮</div>
            </SubgridItem>
          ))}
        </SubgridContainer>
      </DemoContainer>
      <CodeBlock>{`display: grid;
grid-template-rows: auto 1fr auto;
gap: 1rem;

> div {
  padding: 1rem;
  background-color: #4a90e2;
  color: white;
  border-radius: 4px;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 响应式网格设计</h2>
      <Description>
        使用auto-fit和minmax创建自适应的网格布局。
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

> div:nth-child(4n) {
  grid-column: span 2;
  grid-row: span 2;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 网格动画效果</h2>
      <Description>
        为网格项目添加过渡和变换效果。
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

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用技巧</h2>
      <Description>网格布局的最佳实践和注意事项：</Description>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>使用命名的网格线和区域提高代码可维护性</li>
        <li>合理使用auto-fit和auto-fill实现响应式布局</li>
        <li>利用grid-auto-flow优化内容流动方向</li>
        <li>考虑使用subgrid实现复杂的嵌套布局</li>
        <li>注意网格布局在不同设备上的表现</li>
      </ul>
    </Container>
  );
};

export default Lesson21;
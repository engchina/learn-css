import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

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

const SubgridContainer = styled(GridContainer)`
  display: grid;
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

const GridLayoutGuide = () => {
  return (
    <Container>
      <Title>CSS Grid布局完全指南</Title>
      <Description>
        Grid布局是CSS中最强大的布局系统，它提供了一个基于网格的二维布局系统。本课程将全面介绍Grid布局的基础概念、
        高级特性以及最佳实践，帮助你掌握这一强大的布局工具。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. Grid布局基础</h2>
      <Description>
        了解Grid布局的核心概念和基本用法。
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

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 网格区域和模板</h2>
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

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 子网格（Subgrid）</h2>
      <Description>
        使用子网格特性创建对齐的嵌套布局结构。
      </Description>
      <SubgridContainer>
        {Array.from({ length: 3 }).map((_, i) => (
          <SubgridItem key={i}>
            <div>标题 {i + 1}</div>
            <div>内容描述</div>
            <div>操作按钮</div>
          </SubgridItem>
        ))}
      </SubgridContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 响应式网格设计</h2>
      <Description>
        使用auto-fit和minmax创建自适应的网格布局。
      </Description>
      <ResponsiveGrid>
        {Array.from({ length: 8 }).map((_, i) => (
          <GridItem key={i}>项目 {i + 1}</GridItem>
        ))}
      </ResponsiveGrid>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 网格动画效果</h2>
      <Description>
        为网格布局添加动画和交互效果。
      </Description>
      <AnimatedGrid>
        {Array.from({ length: 6 }).map((_, i) => (
          <GridItem key={i}>悬停效果 {i + 1}</GridItem>
        ))}
      </AnimatedGrid>

      <h2 className="text-xl font-semibold mt-6 mb-4">6. 最佳实践</h2>
      <Description>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>使用命名网格线和区域提高代码可维护性</li>
          <li>合理使用auto-fit/auto-fill实现响应式布局</li>
          <li>利用minmax()函数控制网格尺寸范围</li>
          <li>使用gap属性统一设置间距</li>
          <li>考虑使用子网格实现复杂的嵌套布局</li>
        </ul>
      </Description>
    </Container>
  );
};

export default GridLayoutGuide;
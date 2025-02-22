import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

// 基础布局容器
const LayoutContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f0f9ff;
  border: 2px dashed #4a90e2;
  border-radius: 8px;
`;

const FlexContainer = styled(LayoutContainer)`
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

const GridContainer = styled(LayoutContainer)`
  display: grid;
  gap: 1rem;
`;

const GridItem = styled.div<{ area?: string }>`
  padding: 1rem;
  background-color: #4a90e2;
  color: white;
  text-align: center;
  border-radius: 4px;
  ${props => props.area && `grid-area: ${props.area};`}
`;



const Lesson2 = () => {
  return (
    <Container>
      <Title>现代布局系统精通：Flexbox与Grid高级应用</Title>
      <Description>
        本课程将深入探讨CSS中两个最强大的布局系统：Flexbox和Grid。通过系统的学习和实践，
        你将掌握从基础到高级的布局技术，能够创建灵活、响应式的现代网页布局。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">第一部分：Flexbox基础</h2>
      <Description>
        Flexbox是一种一维布局模型，专门用于处理行或列方向上的元素排列。让我们从基础概念开始，
        逐步掌握Flexbox的核心特性。
      </Description>

      <h3 className="text-lg font-semibold mt-4 mb-2">1. Flex容器基础</h3>
      <Description>
        通过设置 <code>display: flex</code> 创建flex容器，子元素自动成为flex项目。
      </Description>
      <FlexContainer className="flex">
        <FlexItem>项目 1</FlexItem>
        <FlexItem>项目 2</FlexItem>
        <FlexItem>项目 3</FlexItem>
      </FlexContainer>
      <CodeBlock>{`display: flex;  // 创建flex容器

.flex-item {
  // flex项目的基本样式
  padding: 1rem;
  margin: 0.5rem;
}`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-4 mb-2">2. Flex项目对齐</h3>
      <Description>
        学习如何使用justify-content和align-items控制项目的对齐方式。
      </Description>
      <FlexContainer className="flex justify-between items-center" style={{ height: '300px' }}>
        <FlexItem>左对齐</FlexItem>
        <FlexItem>垂直居中</FlexItem>
        <FlexItem>右对齐</FlexItem>
      </FlexContainer>
      <CodeBlock>{`// 主轴对齐（水平）
justify-content: space-between;

// 交叉轴对齐（垂直）
align-items: center;`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">第二部分：Grid基础</h2>
      <Description>
        Grid布局系统提供了强大的二维布局能力。我们将从基本概念开始，逐步深入学习Grid的高级特性。
      </Description>

      <h3 className="text-lg font-semibold mt-4 mb-2">1. 创建网格容器</h3>
      <Description>
        学习如何创建基本的网格布局，理解行列概念。
      </Description>
      <GridContainer style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <GridItem key={i}>网格项 {i + 1}</GridItem>
        ))}
      </GridContainer>
      <CodeBlock>{`display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-4 mb-2">2. 响应式网格</h3>
      <Description>
        使用auto-fit和minmax创建自适应的网格布局。
      </Description>
      <GridContainer style={{ 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridAutoRows: 'minmax(100px, auto)'
      }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <GridItem key={i}>自适应项 {i + 1}</GridItem>
        ))}
      </GridContainer>
      <CodeBlock>{`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-auto-rows: minmax(100px, auto);`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">第三部分：高级布局技巧</h2>
      <Description>
        掌握了基础知识后，让我们来看看如何运用这些技术创建更复杂的布局。
      </Description>

      <h3 className="text-lg font-semibold mt-4 mb-2">1. 网格区域布局</h3>
      <Description>
        使用grid-template-areas创建语义化的布局结构。
      </Description>
      <GridContainer style={{
        gridTemplateAreas: `
          "header header header"
          "sidebar content content"
          "footer footer footer"
        `,
        gridTemplateColumns: '200px 1fr 1fr',
        gridTemplateRows: 'auto 1fr auto',
        minHeight: '400px'
      }}>
        <GridItem area="header">页头区域</GridItem>
        <GridItem area="sidebar">侧边栏</GridItem>
        <GridItem area="content">主要内容</GridItem>
        <GridItem area="footer">页脚区域</GridItem>
      </GridContainer>
      <CodeBlock>{`grid-template-areas:
  "header header header"
  "sidebar content content"
  "footer footer footer";
grid-template-columns: 200px 1fr 1fr;
grid-template-rows: auto 1fr auto;`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">布局系统最佳实践</h2>
      <Description>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>选择合适的布局系统：
            <ul className="list-disc pl-6 mt-1">
              <li>一维布局（单行或单列）优先使用Flexbox</li>
              <li>二维布局（多行多列）优先使用Grid</li>
              <li>复杂布局可以组合使用两种系统</li>
            </ul>
          </li>
          <li>响应式设计技巧：
            <ul className="list-disc pl-6 mt-1">
              <li>使用flex-wrap处理Flexbox换行</li>
              <li>使用auto-fit/auto-fill实现Grid响应式</li>
              <li>合理使用媒体查询调整布局</li>
            </ul>
          </li>
          <li>性能优化建议：
            <ul className="list-disc pl-6 mt-1">
              <li>避免过度嵌套的布局结构</li>
              <li>使用CSS containment提升渲染性能</li>
              <li>合理使用will-change属性</li>
            </ul>
          </li>
        </ul>
      </Description>
    </Container>
  );
};

export default Lesson2;
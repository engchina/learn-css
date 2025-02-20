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

const GridContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f0f9ff;
  border: 2px dashed #4a90e2;
`;

const GridItem = styled.div`
  padding: 1rem;
  background-color: #4a90e2;
  color: white;
  text-align: center;
  border-radius: 4px;
`;

const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  overflow-x: auto;
`;

const Lesson3 = () => {
  return (
    <Container>
      <Title>Grid布局</Title>
      <Description>
        Grid布局是CSS中最强大的布局系统，它提供了一个基于网格的二维布局系统，
        使我们能够创建复杂的网页布局。通过定义行、列和区域，我们可以精确控制元素的位置和大小。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 基本的Grid容器</h2>
      <Description>
        设置 <code>display: grid</code> 创建一个网格容器，并使用 grid-template-columns 定义列的大小。
      </Description>
      <GridContainer className="grid grid-cols-3 gap-4">
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
      </GridContainer>
      <CodeBlock>{`display: grid;
grid-template-columns: repeat(3, 1fr);  // 创建3列，每列宽度相等
gap: 1rem;  // 设置网格间距`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 网格区域 (grid-area)</h2>
      <Description>
        使用grid-template-areas定义网格区域，让元素可以跨越多个网格单元格。
      </Description>
      <GridContainer style={{
        display: 'grid',
        gridTemplateAreas: `
          "header header header"
          "sidebar main main"
          "footer footer footer"
        `,
        gridTemplateColumns: '200px 1fr 1fr',
        gap: '1rem'
      }}>
        <GridItem style={{ gridArea: 'header' }}>Header</GridItem>
        <GridItem style={{ gridArea: 'sidebar' }}>Sidebar</GridItem>
        <GridItem style={{ gridArea: 'main' }}>Main Content</GridItem>
        <GridItem style={{ gridArea: 'footer' }}>Footer</GridItem>
      </GridContainer>
      <CodeBlock>{`grid-template-areas:
  "header header header"
  "sidebar main main"
  "footer footer footer";
grid-template-columns: 200px 1fr 1fr;`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 响应式Grid布局</h2>
      <Description>
        使用minmax()和auto-fit/auto-fill创建响应式网格布局。
      </Description>
      <GridContainer style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1rem'
      }}>
        {Array.from({ length: 6 }).map((_, index) => (
          <GridItem key={index}>自适应项目 {index + 1}</GridItem>
        ))}
      </GridContainer>
      <CodeBlock>{`grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
// auto-fit：自动调整列数
// minmax(150px, 1fr)：每列最小150px，最大1fr`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 对齐方式</h2>
      <Description>
        使用justify-items和align-items控制网格项目在其网格区域内的对齐方式。
      </Description>
      <GridContainer style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        height: '200px',
        justifyItems: 'center',
        alignItems: 'center'
      }}>
        <GridItem style={{ width: '80px' }}>居中</GridItem>
        <GridItem style={{ width: '80px' }}>居中</GridItem>
        <GridItem style={{ width: '80px' }}>居中</GridItem>
      </GridContainer>
      <CodeBlock>{`justify-items: center;  // 水平居中
align-items: center;  // 垂直居中`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 网格线定位</h2>
      <Description>
        使用grid-column和grid-row根据网格线定位元素。
      </Description>
      <GridContainer style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem'
      }}>
        <GridItem style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}>跨越2x2</GridItem>
        <GridItem style={{ gridColumn: '3 / 5' }}>跨越2列</GridItem>
        <GridItem>正常项目</GridItem>
        <GridItem>正常项目</GridItem>
      </GridContainer>
      <CodeBlock>{`grid-column: 1 / 3;  // 从第1条列网格线到第3条
grid-row: 1 / 3;    // 从第1条行网格线到第3条`}</CodeBlock>
    </Container>
  );
};

export default Lesson3;
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

const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  overflow-x: auto;
`;

const Lesson2 = () => {
  return (
    <Container>
      <Title>Flexbox布局</Title>
      <Description>
        Flexbox是一种一维布局模型，它提供了强大的空间分布和对齐能力。
        通过设置容器（flex container）和项目（flex items）的属性，可以轻松实现各种灵活的布局。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 基本的Flex容器</h2>
      <Description>
        设置 <code>display: flex</code> 创建一个flex容器，其直接子元素将成为flex项目。
      </Description>
      <FlexContainer className="flex">
        <FlexItem>项目 1</FlexItem>
        <FlexItem>项目 2</FlexItem>
        <FlexItem>项目 3</FlexItem>
      </FlexContainer>
      <CodeBlock>{`display: flex;  // 创建flex容器`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 主轴对齐 (justify-content)</h2>
      <Description>
        justify-content属性定义了flex项目在主轴上的对齐方式。
      </Description>
      <FlexContainer className="flex justify-between">
        <FlexItem>项目 1</FlexItem>
        <FlexItem>项目 2</FlexItem>
        <FlexItem>项目 3</FlexItem>
      </FlexContainer>
      <CodeBlock>{`justify-content: space-between;  // 项目之间平均分配空间`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 交叉轴对齐 (align-items)</h2>
      <Description>
        align-items属性定义了flex项目在交叉轴上的对齐方式。
      </Description>
      <FlexContainer className="flex items-center" style={{ height: '300px' }}>
        <FlexItem>项目 1</FlexItem>
        <FlexItem>项目 2</FlexItem>
        <FlexItem>项目 3</FlexItem>
      </FlexContainer>
      <CodeBlock>{`align-items: center;  // 在交叉轴上居中对齐`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. Flex项目属性</h2>
      <Description>
        flex项目可以通过flex-grow、flex-shrink和flex-basis属性控制其大小和行为。
      </Description>
      <FlexContainer className="flex">
        <FlexItem style={{ flex: '1 1 auto' }}>flex: 1</FlexItem>
        <FlexItem style={{ flex: '2 1 auto' }}>flex: 2</FlexItem>
        <FlexItem style={{ flex: '1 1 auto' }}>flex: 1</FlexItem>
      </FlexContainer>
      <CodeBlock>{`flex: 1;  // flex-grow: 1, flex-shrink: 1, flex-basis: auto`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. Flex换行</h2>
      <Description>
        使用flex-wrap属性控制flex项目是否换行。
      </Description>
      <FlexContainer className="flex flex-wrap">
        {Array.from({ length: 8 }).map((_, index) => (
          <FlexItem key={index} style={{ width: '100px' }}>项目 {index + 1}</FlexItem>
        ))}
      </FlexContainer>
      <CodeBlock>{`flex-wrap: wrap;  // 允许flex项目换行`}</CodeBlock>
    </Container>
  );
};

export default Lesson2;
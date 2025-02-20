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

const BoxModelDemo = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  border: 5px solid #4a90e2;
  padding: 20px;
  background-color: #f0f9ff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const ContentBox = styled.div`
  height: 100%;
  background-color: #4a90e2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Description = styled.p`
  margin: 1rem 0;
  line-height: 1.6;
  color: #666;
`;

const Lesson1 = () => {
  return (
    <Container>
      <Title>基础布局与盒模型</Title>
      <Description>
        盒模型是CSS中的一个基本概念，它定义了HTML元素如何显示以及如何计算它们的大小。
        每个HTML元素都可以看作是一个矩形盒子，它包含：内容(content)、内边距(padding)、边框(border)和外边距(margin)。
      </Description>
      
      <div className="flex justify-center items-center my-8">
        <BoxModelDemo>
          <ContentBox>内容区域</ContentBox>
        </BoxModelDemo>
      </div>
      
      <Description>
        上面的示例展示了一个基本的盒模型：
      </Description>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>蓝色边框代表border</li>
        <li>浅蓝色背景区域代表padding</li>
        <li>中心的深蓝色区域代表content</li>
        <li>外部的空白区域代表margin</li>
      </ul>
    </Container>
  );
};

export default Lesson1;
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
  border-radius: 8px;
`;

const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  overflow-x: auto;
`;

const LinearGradientBox = styled.div`
  width: 300px;
  height: 150px;
  margin: 1rem auto;
  border-radius: 8px;
  background: linear-gradient(45deg, #4a90e2, #357abd);
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(45deg, #357abd, #4a90e2);
  }
`;

const RadialGradientBox = styled.div`
  width: 300px;
  height: 150px;
  margin: 1rem auto;
  border-radius: 8px;
  background: radial-gradient(circle at center, #4a90e2 0%, #357abd 100%);
  transition: background 0.3s;

  &:hover {
    background: radial-gradient(circle at center, #357abd 0%, #4a90e2 100%);
  }
`;

const RepeatingGradientBox = styled.div`
  width: 300px;
  height: 150px;
  margin: 1rem auto;
  border-radius: 8px;
  background: repeating-linear-gradient(
    45deg,
    #4a90e2,
    #4a90e2 10px,
    #357abd 10px,
    #357abd 20px
  );
`;

const MultipleBackgroundBox = styled.div`
  width: 300px;
  height: 150px;
  margin: 1rem auto;
  border-radius: 8px;
  background:
    linear-gradient(rgba(74, 144, 226, 0.8), rgba(53, 122, 189, 0.8)),
    url('https://via.placeholder.com/300x150') center/cover;
`;

const GradientCard = styled.div`
  width: 300px;
  height: 200px;
  margin: 1rem auto;
  border-radius: 12px;
  padding: 1.5rem;
  background: linear-gradient(135deg, #4a90e2, #357abd);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Lesson10 = () => {
  return (
    <Container>
      <Title>CSS渐变和背景效果</Title>
      <Description>
        CSS渐变和背景效果是创建现代化网页设计的重要工具。通过使用不同类型的渐变和背景叠加，
        我们可以创建丰富多彩的视觉效果，提升网页的美观度和用户体验。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 线性渐变</h2>
      <Description>
        使用 <code>linear-gradient</code> 创建从一个颜色到另一个颜色的平滑过渡。
        可以通过调整角度和颜色停止点来创建不同的效果。
      </Description>
      <DemoContainer>
        <LinearGradientBox />
      </DemoContainer>
      <CodeBlock>{`background: linear-gradient(45deg, #4a90e2, #357abd);

// 悬停效果
&:hover {
  background: linear-gradient(45deg, #357abd, #4a90e2);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 径向渐变</h2>
      <Description>
        使用 <code>radial-gradient</code> 创建从中心点向外扩散的渐变效果。
        可以通过调整形状、大小和位置来创建各种效果。
      </Description>
      <DemoContainer>
        <RadialGradientBox />
      </DemoContainer>
      <CodeBlock>{`background: radial-gradient(circle at center, #4a90e2 0%, #357abd 100%);

// 悬停效果
&:hover {
  background: radial-gradient(circle at center, #357abd 0%, #4a90e2 100%);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 重复渐变模式</h2>
      <Description>
        使用 <code>repeating-linear-gradient</code> 或 <code>repeating-radial-gradient</code> 
        创建重复的渐变图案，适合用于创建条纹或环形图案。
      </Description>
      <DemoContainer>
        <RepeatingGradientBox />
      </DemoContainer>
      <CodeBlock>{`background: repeating-linear-gradient(
  45deg,
  #4a90e2,
  #4a90e2 10px,
  #357abd 10px,
  #357abd 20px
);`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 多重背景叠加</h2>
      <Description>
        CSS允许我们将多个背景层叠在一起，可以组合使用渐变、图片和纯色背景，
        创建复杂的视觉效果。
      </Description>
      <DemoContainer>
        <MultipleBackgroundBox />
      </DemoContainer>
      <CodeBlock>{`background:
  linear-gradient(rgba(74, 144, 226, 0.8), rgba(53, 122, 189, 0.8)),
  url('image.jpg') center/cover;`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        将渐变和背景效果应用到实际UI组件中，创建现代化的设计效果。
      </Description>
      <DemoContainer>
        <GradientCard>
          <h3 className="text-xl font-semibold mb-2">渐变卡片</h3>
          <p>悬停时会有上浮效果</p>
        </GradientCard>
      </DemoContainer>
      <CodeBlock>{`background: linear-gradient(135deg, #4a90e2, #357abd);
transition: transform 0.3s;

&:hover {
  transform: translateY(-5px);
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson10;
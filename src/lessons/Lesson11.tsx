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

const FilterBox = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('https://picsum.photos/200/200');
  background-size: cover;
  transition: filter 0.3s;
  cursor: pointer;

  &:hover {
    filter: blur(5px) brightness(1.2);
  }
`;

const FilterCombination = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('https://picsum.photos/200/200');
  background-size: cover;
  transition: filter 0.3s;
  cursor: pointer;

  &:hover {
    filter: sepia(0.5) hue-rotate(180deg) saturate(1.5);
  }
`;

const BlendModeBox = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background: linear-gradient(45deg, #4a90e2, #357abd);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://picsum.photos/300/200');
    background-size: cover;
    mix-blend-mode: overlay;
  }
`;

const BlendModeStack = styled.div`
  position: relative;
  width: 300px;
  height: 200px;

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: mix-blend-mode 0.3s;
  }

  .layer-1 {
    background: linear-gradient(45deg, #4a90e2, #357abd);
  }

  .layer-2 {
    background: linear-gradient(-45deg, #f0f9ff, transparent);
    mix-blend-mode: screen;
  }

  &:hover .layer-2 {
    mix-blend-mode: multiply;
  }
`;

const EffectCard = styled.div`
  position: relative;
  width: 300px;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #4a90e2, #357abd);
    mix-blend-mode: overlay;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-5px);

    &::before {
      opacity: 1;
    }
  }

  h3 {
    position: relative;
    z-index: 1;
  }

  p {
    position: relative;
    z-index: 1;
  }
`;

const Lesson11 = () => {
  return (
    <Container>
      <Title>CSS滤镜和混合模式</Title>
      <Description>
        CSS滤镜（filter）和混合模式（blend mode）是现代网页设计中的重要工具，
        它们可以创建丰富的视觉效果，增强用户体验。通过组合使用这些特性，
        我们可以实现各种复杂的图像处理效果，而无需依赖图像编辑软件。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 基础滤镜效果</h2>
      <Description>
        CSS filter 属性提供了多种图像处理滤镜，如模糊（blur）、亮度（brightness）、
        对比度（contrast）等。悬停在下面的图片上查看效果。
      </Description>
      <DemoContainer>
        <FilterBox />
      </DemoContainer>
      <CodeBlock>{`filter: blur(5px) brightness(1.2);

// 其他常用滤镜：
// grayscale(100%)   // 灰度
// sepia(100%)       // 褐色
// contrast(200%)    // 对比度
// saturate(200%)    // 饱和度
// hue-rotate(90deg) // 色相旋转`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 高级滤镜组合</h2>
      <Description>
        多个滤镜效果可以组合使用，创造出更加复杂和独特的视觉效果。
      </Description>
      <DemoContainer>
        <FilterCombination />
      </DemoContainer>
      <CodeBlock>{`filter: sepia(0.5)          // 添加褐色效果
       hue-rotate(180deg)   // 旋转色相
       saturate(1.5);      // 增加饱和度`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 混合模式基础</h2>
      <Description>
        混合模式定义了元素与其背景之间的混合方式，可以创建独特的视觉效果。
      </Description>
      <DemoContainer>
        <BlendModeBox />
      </DemoContainer>
      <CodeBlock>{`mix-blend-mode: overlay;

// 其他常用混合模式：
// multiply    // 正片叠底
// screen      // 滤色
// overlay     // 叠加
// darken      // 变暗
// lighten     // 变亮
// color-dodge // 颜色减淡`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 混合模式叠加</h2>
      <Description>
        通过叠加多个使用不同混合模式的层，可以创建更加复杂的视觉效果。
        悬停查看混合模式变化。
      </Description>
      <DemoContainer>
        <BlendModeStack>
          <div className="layer layer-1" />
          <div className="layer layer-2" />
        </BlendModeStack>
      </DemoContainer>
      <CodeBlock>{`.layer-1 {
  background: linear-gradient(45deg, #4a90e2, #357abd);
}

.layer-2 {
  background: linear-gradient(-45deg, #f0f9ff, transparent);
  mix-blend-mode: screen;

  &:hover {
    mix-blend-mode: multiply;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 实际应用案例</h2>
      <Description>
        将滤镜和混合模式应用到实际UI组件中，创建现代化的交互效果。
      </Description>
      <DemoContainer>
        <EffectCard>
          <h3 className="text-xl font-semibold mb-2">特效卡片</h3>
          <p>悬停查看混合模式效果</p>
        </EffectCard>
      </DemoContainer>
      <CodeBlock>{`&::before {
  content: '';
  position: absolute;
  background: linear-gradient(45deg, #4a90e2, #357abd);
  mix-blend-mode: overlay;
  opacity: 0;
  transition: opacity 0.3s;
}

&:hover {
  transform: translateY(-5px);
  &::before { opacity: 1; }
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson11;
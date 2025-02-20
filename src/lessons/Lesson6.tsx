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

const ResponsiveBox = styled.div`
  padding: 1rem;
  background-color: #4a90e2;
  color: white;
  text-align: center;
  border-radius: 4px;
  
  @media (max-width: 768px) {
    background-color: #357abd;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    background-color: #2c5282;
    font-size: 0.8rem;
  }
`;

const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const ResponsiveNav = styled.nav`
  display: flex;
  gap: 1rem;
  background-color: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.a`
  color: #4a90e2;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f9ff;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Lesson6 = () => {
  return (
    <Container>
      <Title>响应式设计</Title>
      <Description>
        响应式设计是现代网页开发中不可或缺的一部分。通过使用媒体查询、弹性布局和响应式单位，
        我们可以创建在不同设备和屏幕尺寸下都能良好工作的网页。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 媒体查询基础</h2>
      <Description>
        使用 <code>@media</code> 查询可以根据设备特性（如屏幕宽度）应用不同的样式。
      </Description>
      <DemoContainer>
        <ResponsiveBox>
          调整浏览器窗口大小查看效果
        </ResponsiveBox>
      </DemoContainer>
      <CodeBlock>{`@media (max-width: 768px) {
  background-color: #357abd;
  font-size: 0.9rem;
}

@media (max-width: 480px) {
  background-color: #2c5282;
  font-size: 0.8rem;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 响应式布局</h2>
      <Description>
        使用Grid或Flexbox配合媒体查询创建响应式布局。
      </Description>
      <DemoContainer>
        <ResponsiveGrid>
          {Array.from({ length: 4 }).map((_, index) => (
            <ResponsiveBox key={index}>项目 {index + 1}</ResponsiveBox>
          ))}
        </ResponsiveGrid>
      </DemoContainer>
      <CodeBlock>{`display: grid;
grid-template-columns: repeat(4, 1fr);

@media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 480px) {
  grid-template-columns: 1fr;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 响应式图片</h2>
      <Description>
        使用max-width和height: auto确保图片在不同屏幕尺寸下正确缩放。
      </Description>
      <DemoContainer>
        <ResponsiveImage
          src="https://via.placeholder.com/800x400"
          alt="响应式图片示例"
        />
      </DemoContainer>
      <CodeBlock>{`max-width: 100%;
height: auto;
// 这样设置可以让图片在容器范围内自适应缩放`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 响应式导航</h2>
      <Description>
        创建在移动设备上自动转换为垂直布局的导航菜单。
      </Description>
      <DemoContainer>
        <ResponsiveNav>
          <NavItem href="#">首页</NavItem>
          <NavItem href="#">关于</NavItem>
          <NavItem href="#">服务</NavItem>
          <NavItem href="#">联系我们</NavItem>
        </ResponsiveNav>
      </DemoContainer>
      <CodeBlock>{`// 默认水平布局
display: flex;
gap: 1rem;

@media (max-width: 768px) {
  // 在移动设备上切换为垂直布局
  flex-direction: column;
  align-items: center;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 响应式设计最佳实践</h2>
      <Description>
        以下是一些响应式设计的重要原则：
      </Description>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li>使用相对单位（rem、em、%）代替固定像素值</li>
        <li>采用移动优先的设计方法</li>
        <li>使用适当的断点值（breakpoints）</li>
        <li>测试不同设备和方向</li>
        <li>确保触摸目标足够大</li>
      </ul>
    </Container>
  );
};

export default Lesson6;
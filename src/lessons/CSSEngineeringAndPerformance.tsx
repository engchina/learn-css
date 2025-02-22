import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

const VariableDemo = styled.div`
  --primary-color: #4a90e2;
  --secondary-color: #357abd;
  --spacing: 1rem;
  
  display: flex;
  gap: var(--spacing);
  
  button {
    padding: var(--spacing);
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: var(--secondary-color);
    }
  }
`;

const NestedDemo = styled.nav`
  background-color: #4a90e2;
  padding: 1rem;
  border-radius: 4px;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
    
    li {
      a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: background-color 0.3s;
        
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
`;

const MixinDemo = styled.div`
  display: flex;
  gap: 1rem;
  
  .card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;

const PerformanceDemo = styled.div`
  .inefficient {
    width: 100px;
    height: 100px;
    background: #4a90e2;
    margin-bottom: 1rem;
    position: relative;
    animation: moveLeft 3s infinite;
  }

  .efficient {
    width: 100px;
    height: 100px;
    background: #357abd;
    margin-bottom: 1rem;
    position: relative;
    transform: translateZ(0);
    will-change: transform;
    animation: moveRight 3s infinite;
  }

  @keyframes moveLeft {
    from { left: 0; }
    to { left: calc(100% - 100px); }
  }

  @keyframes moveRight {
    from { transform: translateX(0); }
    to { transform: translateX(calc(100% - 100px)); }
  }
`;

const LayerDemo = styled.div`
  position: relative;
  height: 200px;

  .layer {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .layer1 {
    background: rgba(74, 144, 226, 0.8);
    top: 20px;
    left: 20px;
  }

  .layer2 {
    background: rgba(53, 122, 189, 0.8);
    top: 40px;
    left: 40px;
  }
`;

const CriticalDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;

  .critical-content {
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const CSSEngineeringAndPerformance = () => {
  return (
    <Container>
      <Title>CSS工程化与性能优化指南</Title>
      <Description>
        本指南将全面介绍CSS工程化与性能优化的核心概念和最佳实践，包括CSS预处理器的使用、
        性能优化技巧、工程化方案等内容，帮助你构建高性能、可维护的CSS架构。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. CSS预处理器（SCSS/SASS）</h2>
      <Description>
        CSS预处理器通过提供变量、嵌套、混合器等特性，帮助我们编写更加模块化和可维护的样式代码。
      </Description>
      
      <h3 className="text-lg font-semibold mt-4 mb-2">1.1 变量使用</h3>
      <DemoContainer>
        <VariableDemo>
          <button>主按钮</button>
          <button>次按钮</button>
        </VariableDemo>
      </DemoContainer>
      <CodeBlock>{`$primary-color: #4a90e2;
$secondary-color: #357abd;
$spacing: 1rem;

button {
  padding: $spacing;
  background-color: $primary-color;
}`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-4 mb-2">1.2 嵌套规则</h3>
      <DemoContainer>
        <NestedDemo>
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">服务</a></li>
          </ul>
        </NestedDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 性能优化基础</h2>
      <Description>
        CSS性能优化涉及多个方面，包括选择器优化、重排重绘管理、动画性能等。
      </Description>

      <h3 className="text-lg font-semibold mt-4 mb-2">2.1 选择器优化</h3>
      <CodeBlock>{`/* 低效的选择器 */
#header div.navigation ul li a { color: #333; }

/* 优化后的选择器 */
.nav-link { color: #333; }`}</CodeBlock>

      <h3 className="text-lg font-semibold mt-4 mb-2">2.2 动画性能优化</h3>
      <DemoContainer>
        <PerformanceDemo>
          <div className="inefficient">低效动画</div>
          <div className="efficient">优化动画</div>
        </PerformanceDemo>
      </DemoContainer>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 工程化最佳实践</h2>
      <Description>
        CSS工程化需要考虑以下几个关键方面：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>模块化组织方案</li>
          <li>构建和打包优化</li>
          <li>代码质量控制</li>
          <li>团队协作规范</li>
        </ul>
      </Description>

      <h3 className="text-lg font-semibold mt-4 mb-2">3.1 关键渲染路径优化</h3>
      <DemoContainer>
        <CriticalDemo>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="critical-content">
              关键内容 {i + 1}
            </div>
          ))}
        </CriticalDemo>
      </DemoContainer>
      <CodeBlock>{`<!-- 内联关键CSS -->
<style>
  /* 首屏关键样式 */
  .header, .hero { ... }
</style>

<!-- 异步加载非关键CSS -->
<link rel="preload" href="styles.css" as="style"
      onload="this.rel='stylesheet'">`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 性能监控与优化</h2>
      <Description>
        建立性能监控和持续优化机制：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>使用性能监控工具</li>
          <li>建立性能指标体系</li>
          <li>定期进行性能评估</li>
          <li>制定优化策略</li>
        </ul>
      </Description>

      <h3 className="text-lg font-semibold mt-4 mb-2">4.1 层叠优化示例</h3>
      <DemoContainer>
        <LayerDemo>
          <div className="layer layer1" />
          <div className="layer layer2" />
        </LayerDemo>
      </DemoContainer>
    </Container>
  );
};

export default CSSEngineeringAndPerformance;
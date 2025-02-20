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

const ThemeBox = styled.div`
  --primary-color: #4a90e2;
  --text-color: #333;
  --bg-color: #fff;
  
  padding: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    --primary-color: #357abd;
    --text-color: #fff;
    --bg-color: #4a90e2;
  }
`;

const ScopedVariablesDemo = styled.div`
  --spacing: 1rem;
  
  .outer {
    padding: var(--spacing);
    background-color: #f0f9ff;
    border: 1px solid #4a90e2;
    
    .inner {
      --spacing: 2rem;
      padding: var(--spacing);
      background-color: #e6f3ff;
      border: 1px solid #357abd;
    }
  }
`;

const ThemeSwitcher = styled.div`
  --theme-primary: #4a90e2;
  --theme-secondary: #357abd;
  --theme-background: #fff;
  --theme-text: #333;
  
  padding: 1rem;
  background-color: var(--theme-background);
  color: var(--theme-text);
  border: 2px solid var(--theme-primary);
  border-radius: 4px;
  transition: all 0.3s ease;

  &[data-theme='dark'] {
    --theme-primary: #61dafb;
    --theme-secondary: #4fa8d2;
    --theme-background: #282c34;
    --theme-text: #fff;
  }
`;

const ThemeButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--theme-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0.5rem;
  
  &:hover {
    background-color: var(--theme-secondary);
  }
`;

const ResponsiveContainer = styled.div`
  --container-width: 100%;
  --columns: 4;
  --gap: 1rem;
  
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: var(--gap);
  width: var(--container-width);
  
  @media (max-width: 768px) {
    --columns: 2;
  }
  
  @media (max-width: 480px) {
    --columns: 1;
  }
`;

const GridItem = styled.div`
  padding: 1rem;
  background-color: #4a90e2;
  color: white;
  text-align: center;
  border-radius: 4px;
`;

const Lesson7 = () => {
  const toggleTheme = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const currentTheme = container.getAttribute('data-theme');
    container.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Container>
      <Title>CSS变量（自定义属性）</Title>
      <Description>
        CSS变量（也称为自定义属性）是一种强大的样式复用机制，它允许我们定义可重复使用的值，
        并在需要时轻松修改这些值。通过CSS变量，我们可以创建更加灵活和可维护的样式表。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. CSS变量基础</h2>
      <Description>
        使用 <code>--变量名</code> 定义变量，使用 <code>var(--变量名)</code> 使用变量。
      </Description>
      <DemoContainer>
        <ThemeBox>
          悬停查看变量值变化效果
        </ThemeBox>
      </DemoContainer>
      <CodeBlock>{`:root {
  --primary-color: #4a90e2;
  --text-color: #333;
  --bg-color: #fff;
}

.element {
  color: var(--text-color);
  background-color: var(--bg-color);
  border: 2px solid var(--primary-color);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 变量作用域</h2>
      <Description>
        CSS变量遵循级联规则，内部作用域可以覆盖外部作用域的变量值。
      </Description>
      <DemoContainer>
        <ScopedVariablesDemo>
          <div className="outer">
            外部元素（--spacing: 1rem）
            <div className="inner">
              内部元素（--spacing: 2rem）
            </div>
          </div>
        </ScopedVariablesDemo>
      </DemoContainer>
      <CodeBlock>{`.outer {
  --spacing: 1rem;
  padding: var(--spacing);
}

.inner {
  --spacing: 2rem;
  padding: var(--spacing);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. JavaScript操作CSS变量</h2>
      <Description>
        通过JavaScript可以动态读取和修改CSS变量的值。
      </Description>
      <DemoContainer>
        <ThemeSwitcher onClick={toggleTheme}>
          <p>点击切换主题</p>
          <div>
            <ThemeButton>按钮 1</ThemeButton>
            <ThemeButton>按钮 2</ThemeButton>
          </div>
        </ThemeSwitcher>
      </DemoContainer>
      <CodeBlock>{`// 获取CSS变量值
getComputedStyle(element).getPropertyValue('--variable-name');

// 设置CSS变量值
element.style.setProperty('--variable-name', 'value');`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 响应式设计中的应用</h2>
      <Description>
        在媒体查询中使用CSS变量来创建响应式布局。
      </Description>
      <DemoContainer>
        <ResponsiveContainer>
          {Array.from({ length: 4 }).map((_, index) => (
            <GridItem key={index}>项目 {index + 1}</GridItem>
          ))}
        </ResponsiveContainer>
      </DemoContainer>
      <CodeBlock>{`:root {
  --columns: 4;
}

@media (max-width: 768px) {
  :root {
    --columns: 2;
  }
}

@media (max-width: 480px) {
  :root {
    --columns: 1;
  }
}

.grid {
  grid-template-columns: repeat(var(--columns), 1fr);
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 最佳实践</h2>
      <Description>
        使用CSS变量的一些建议：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>在:root选择器中定义全局变量</li>
          <li>使用有意义的变量名称</li>
          <li>为变量提供后备值：var(--color, #000)</li>
          <li>利用作用域实现组件级的样式隔离</li>
          <li>配合JavaScript实现动态主题</li>
        </ul>
      </Description>
    </Container>
  );
};

export default Lesson7;
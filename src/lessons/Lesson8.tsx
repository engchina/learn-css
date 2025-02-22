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
  padding: 1.5rem;
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

const ExtendDemo = styled.div`
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .primary-button {
    background-color: #4a90e2;
    color: white;
    
    &:hover {
      background-color: #357abd;
    }
  }
  
  .secondary-button {
    background-color: #f5f5f5;
    color: #333;
    
    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const FunctionDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  .box {
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
    color: white;
    
    &:nth-child(1) { background-color: rgba(74, 144, 226, 1); }
    &:nth-child(2) { background-color: rgba(74, 144, 226, 0.7); }
    &:nth-child(3) { background-color: rgba(74, 144, 226, 0.4); }
  }
`;

const Lesson8 = () => {
  return (
    <Container>
      <Title>CSS预处理器（SCSS/SASS）</Title>
      <Description>
        CSS预处理器是一种特殊的语言，它扩展了CSS的功能，增加了变量、嵌套规则、混合器（Mixins）、
        函数和继承等特性。通过使用预处理器，我们可以编写更加模块化、可维护和可重用的样式代码。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 变量</h2>
      <Description>
        在SCSS中，变量使用$符号定义，可以存储颜色、尺寸等值，方便重复使用和统一修改。
      </Description>
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
  
  &:hover {
    background-color: $secondary-color;
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 嵌套规则</h2>
      <Description>
        SCSS允许在选择器中嵌套其他选择器，这样可以更清晰地表示HTML的层级结构。
      </Description>
      <DemoContainer>
        <NestedDemo>
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">服务</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </NestedDemo>
      </DemoContainer>
      <CodeBlock>{`nav {
  background-color: #4a90e2;
  
  ul {
    list-style: none;
    
    li {
      a {
        color: white;
        
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 混合器（Mixins）</h2>
      <Description>
        Mixins允许我们定义可重用的样式块，可以包含多个CSS规则，甚至可以接受参数。
      </Description>
      <DemoContainer>
        <MixinDemo>
          <div className="card">Mixin示例 1</div>
          <div className="card">Mixin示例 2</div>
        </MixinDemo>
      </DemoContainer>
      <CodeBlock>{`@mixin card-hover {
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

.card {
  @include card-hover;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 继承</h2>
      <Description>
        使用@extend指令可以继承其他选择器的样式，这样可以避免重复编写相同的样式代码。
      </Description>
      <DemoContainer>
        <ExtendDemo>
          <button className="button primary-button">主要按钮</button>
          <button className="button secondary-button">次要按钮</button>
        </ExtendDemo>
      </DemoContainer>
      <CodeBlock>{`%button-base {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary-button {
  @extend %button-base;
  background-color: #4a90e2;
  color: white;
}

.secondary-button {
  @extend %button-base;
  background-color: #f5f5f5;
  color: #333;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 函数</h2>
      <Description>
        SCSS提供了许多内置函数，用于处理颜色、数字和字符串等值。同时也支持自定义函数。
      </Description>
      <DemoContainer>
        <FunctionDemo>
          <div className="box">不透明度 100%</div>
          <div className="box">不透明度 70%</div>
          <div className="box">不透明度 40%</div>
        </FunctionDemo>
      </DemoContainer>
      <CodeBlock>{`@function set-opacity($color, $opacity) {
  @return rgba($color, $opacity);
}

.box {
  &:nth-child(1) { background-color: set-opacity(#4a90e2, 1); }
  &:nth-child(2) { background-color: set-opacity(#4a90e2, 0.7); }
  &:nth-child(3) { background-color: set-opacity(#4a90e2, 0.4); }
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson8;
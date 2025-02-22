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

const InteractiveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #357abd;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 2px solid #4a90e2;
    outline-offset: 2px;
  }
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;

    &:first-child {
      font-weight: bold;
      color: #4a90e2;
    }

    &:last-child {
      border-bottom: none;
    }

    &:nth-child(even) {
      background-color: #f9f9f9;
    }
  }
`;

const PseudoElementDemo = styled.div`
  position: relative;
  padding: 1rem;
  margin: 1rem 0;
  background-color: white;
  border-radius: 4px;

  &::before {
    content: '⭐';
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
    background-color: #4a90e2;
  }
`;

const FormInput = styled.input`
  padding: 0.5rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin: 0.5rem 0;
  width: 100%;
  max-width: 300px;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }

  &:invalid {
    border-color: #ff4d4f;
  }
`;

const CustomLink = styled.a`
  color: #4a90e2;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #4a90e2;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:visited {
    color: #8e44ad;
  }
`;

const Lesson5 = () => {
  return (
    <Container>
      <Title>CSS伪类与伪元素</Title>
      <Description>
        CSS伪类和伪元素是强大的选择器，它们能够根据元素的状态或位置来应用样式，
        还可以创建额外的元素而无需修改HTML结构。通过本课程，我们将学习如何使用这些选择器来增强网页的交互性和视觉效果。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 概念速记：伪类与伪元素的区别</h2>
      <Description>
        快速了解伪类和伪元素的关键区别：
      </Description>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li><strong>标识符：</strong> 伪类使用单冒号(:)，伪元素使用双冒号(::)</li>
        <li><strong>作用对象：</strong> 伪类作用于现有元素的特定状态，伪元素创建文档树外的抽象元素</li>
        <li><strong>本质：</strong> 伪类是状态选择器，伪元素是元素生成器</li>
        <li><strong>常见成员：</strong> 伪类如:hover、:nth-child，伪元素如::before、::after</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 常用伪类</h2>
      <Description>
        最常用的伪类包括 :hover、:active 和 :focus，它们用于响应用户的交互行为。
      </Description>
      <DemoContainer>
        <InteractiveButton>悬停、点击、聚焦试试看</InteractiveButton>
      </DemoContainer>
      <CodeBlock>{`:hover { background-color: #357abd; }
:active { transform: scale(0.98); }
:focus { outline: 2px solid #4a90e2; }`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 伪元素基础</h2>
      <Description>
        结构性伪类可以根据元素在文档结构中的位置来选择元素。
      </Description>
      <DemoContainer>
        <ListContainer>
          <li>第一个元素</li>
          <li>第二个元素</li>
          <li>第三个元素</li>
          <li>第四个元素</li>
          <li>第五个元素</li>
        </ListContainer>
      </DemoContainer>
      <CodeBlock>{`li:first-child { font-weight: bold; }
li:nth-child(even) { background-color: #f9f9f9; }
li:last-child { border-bottom: none; }`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 伪元素基础</h2>
      <Description>
        伪元素允许我们向元素添加装饰性内容，而无需修改HTML结构。
      </Description>
      <DemoContainer>
        <PseudoElementDemo>
          使用::before添加星星图标，使用::after添加下划线
        </PseudoElementDemo>
      </DemoContainer>
      <CodeBlock>{`::before {
  content: '⭐';
  position: absolute;
  left: -20px;
}
::after {
  content: '';
  position: absolute;
  bottom: -10px;
  width: 50%;
  height: 2px;
  background-color: #4a90e2;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. 表单状态伪类</h2>
      <Description>
        表单元素有特殊的伪类，用于不同的表单状态。
      </Description>
      <DemoContainer>
        <div className="space-y-4">
          <FormInput type="text" placeholder="普通输入框" />
          <FormInput type="text" placeholder="禁用状态" disabled />
          <FormInput type="email" placeholder="输入无效的邮箱试试" />
        </div>
      </DemoContainer>
      <CodeBlock>{`:focus { border-color: #4a90e2; }
:disabled { background-color: #f5f5f5; }
:invalid { border-color: #ff4d4f; }`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">6. 实际应用案例</h2>
      <Description>
        结合伪类和伪元素创建现代化的交互效果。
      </Description>
      <DemoContainer>
        <div className="space-y-4">
          <CustomLink href="#">悬停查看动画效果</CustomLink>
          <br />
          <CustomLink href="#" className="visited">已访问的链接样式</CustomLink>
        </div>
      </DemoContainer>
      <CodeBlock>{`&::after {
  content: '';
  position: absolute;
  bottom: -2px;
  width: 0;
  height: 2px;
  transition: width 0.3s;
}
&:hover::after {
  width: 100%;
}`}</CodeBlock>
      <h2 className="text-xl font-semibold mt-6 mb-4">7. 链接伪类详解</h2>
      <Description>
        链接伪类用于样式化链接的不同状态，包括未访问、已访问、悬停和激活状态。
      </Description>
      <DemoContainer>
        <div className="space-y-4">
          <a href="#" className="demo-link">示例链接</a>
          <a href="#" className="demo-link visited">已访问的链接</a>
        </div>
      </DemoContainer>
      <CodeBlock>{`a:link {
  color: #4a90e2;
  text-decoration: none;
}

a:visited {
  color: #357abd;
}

a:hover {
  color: #ff6b6b;
  text-decoration: underline;
}

a:active {
  color: #ff5252;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">8. 用户界面状态伪类</h2>
      <Description>
        用户界面状态伪类用于样式化表单元素的不同状态。
      </Description>
      <DemoContainer>
        <div className="space-y-4">
          <input type="text" className="ui-input" placeholder="获取焦点试试" />
          <button className="ui-button" disabled>禁用状态</button>
          <input type="email" className="ui-input" placeholder="输入无效的邮箱试试" />
        </div>
      </DemoContainer>
      <CodeBlock>{`.ui-input:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
}

.ui-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.ui-input:invalid {
  border-color: #ff4757;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">9. 结构伪类应用</h2>
      <Description>
        结构伪类用于根据元素在文档结构中的位置来选择元素。
      </Description>
      <DemoContainer>
        <ul className="structure-list">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>列表项 {i + 1}</li>
          ))}
        </ul>
      </DemoContainer>
      <CodeBlock>{`.structure-list li:first-child {
  font-weight: bold;
  border-top: none;
}

.structure-list li:last-child {
  border-bottom: none;
}

.structure-list li:nth-child(odd) {
  background-color: #f9f9f9;
}

.structure-list li:nth-child(even) {
  background-color: #e9e9e9;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">10. 伪元素高级应用</h2>
      <Description>
        使用伪元素创造丰富的视觉效果：
      </Description>
      <DemoContainer>
        <div className="space-y-4">
          <blockquote className="fancy-quote">
            这是一段优雅的引用文本，使用::before和::after添加装饰性引号
          </blockquote>
          <p className="magazine-style">
            这是一段模拟杂志排版的文本，第一个字母将会突出显示。这里演示了
            ::first-letter的效果。
          </p>
        </div>
      </DemoContainer>
      <CodeBlock>{`.fancy-quote {
  position: relative;
  padding: 20px;
  border-left: 5px solid #70a1ff;
  background: #f0f4ff;
}

.fancy-quote::before {
  content: "«";
  font-size: 4em;
  position: absolute;
  left: 10px;
  top: -10px;
  color: #70a1ff;
  opacity: 0.3;
}

.magazine-style::first-letter {
  font-size: 3em;
  font-weight: bold;
  color: #4a90e2;
  float: left;
  margin-right: 8px;
  line-height: 1;
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">11. 实际应用案例</h2>
      <Description>
        在实际项目中综合运用伪类和伪元素：
      </Description>
      <DemoContainer>
        <nav className="demo-nav">
          <ul>
            <li><a href="#" className="nav-link active">首页</a></li>
            <li><a href="#" className="nav-link">关于</a></li>
            <li><a href="#" className="nav-link">服务</a></li>
            <li><a href="#" className="nav-link">联系我们</a></li>
          </ul>
        </nav>
      </DemoContainer>
      <CodeBlock>{`.nav-link {
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #4a90e2;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: #4a90e2;
}

.nav-link.active::after {
  width: 100%;
}`}</CodeBlock>
    </Container>
  );
};

export default Lesson5;
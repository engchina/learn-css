import styled from 'styled-components';
import { Container, Title, Description, DemoContainer, CodeBlock } from '../components/Common';

// 示例容器样式
const SelectorDemo = styled.div`
  padding: 1rem;
  background-color: #f0f9ff;
  border-radius: 8px;
  margin: 1rem 0;
`;

// 优先级演示容器
const SpecificityDemo = styled.div`
  .base { color: #666; }
  #unique { color: #e44d26; }
  .important.override { color: #4a90e2; }
  [type="text"] { color: #34c759; }
`;

// 组合选择器示例容器
const CombinatorDemo = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;

  /* 子选择器示例 */
  > div { margin: 0.5rem 0; }
  
  /* 相邻兄弟选择器 */
  h4 + p { color: #4a90e2; }
  
  /* 通用兄弟选择器 */
  h4 ~ span { color: #34c759; }
`;

// 属性选择器示例容器
const AttributeDemo = styled.div`
  [data-type] { background-color: #f0f9ff; }
  [data-type="primary"] { background-color: #4a90e2; color: white; }
  [data-type^="secondary"] { background-color: #34c759; color: white; }
  [data-type$="warning"] { background-color: #ffcc00; }
`;

const Lesson4 = () => {
  return (
    <Container>
      <Title>CSS选择器和优先级</Title>
      <Description>
        本课程将深入探讨CSS选择器的类型、优先级规则以及最佳实践。通过系统的学习，
        你将掌握如何精确地选择和样式化HTML元素，理解选择器优先级的计算规则，
        并学会如何编写高效且可维护的CSS选择器。
      </Description>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. 基础选择器</h2>
      <Description>
        了解CSS中的基本选择器类型：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>元素选择器</li>
          <li>类选择器</li>
          <li>ID选择器</li>
          <li>通用选择器</li>
        </ul>
      </Description>
      <SelectorDemo>
        <div className="basic-selectors">
          <p>元素选择器</p>
          <div className="class-example">类选择器</div>
          <div id="id-example">ID选择器</div>
          <span>通用选择器 *</span>
        </div>
      </SelectorDemo>
      <CodeBlock>{`/* 元素选择器 */
p { color: #333; }

/* 类选择器 */
.class-example { color: #4a90e2; }

/* ID选择器 */
#id-example { color: #e44d26; }

/* 通用选择器 */
* { box-sizing: border-box; }`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. 选择器优先级</h2>
      <Description>
        理解CSS选择器优先级的计算规则：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>内联样式：1000分</li>
          <li>ID选择器：100分</li>
          <li>类选择器、属性选择器、伪类：10分</li>
          <li>元素选择器、伪元素：1分</li>
        </ul>
      </Description>
      <SpecificityDemo>
        <p className="base">基础样式</p>
        <p id="unique">ID选择器样式</p>
        <p className="important override">多类选择器样式</p>
        <input type="text" value="属性选择器样式" readOnly />
      </SpecificityDemo>
      <CodeBlock>{`/* 优先级: 0,0,0,1 */
p { color: #666; }

/* 优先级: 0,1,0,0 */
#unique { color: #e44d26; }

/* 优先级: 0,0,2,0 */
.important.override { color: #4a90e2; }

/* 优先级: 0,0,1,0 */
[type="text"] { color: #34c759; }`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. 组合选择器</h2>
      <Description>
        学习不同类型的组合选择器：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>后代选择器（空格）</li>
          <li>子选择器（&gt;）</li>
          <li>相邻兄弟选择器（+）</li>
          <li>通用兄弟选择器（~）</li>
        </ul>
      </Description>
      <CombinatorDemo>
        <h4>标题</h4>
        <p>相邻段落</p>
        <span>兄弟元素 1</span>
        <span>兄弟元素 2</span>
      </CombinatorDemo>
      <CodeBlock>{`/* 子选择器 */
.parent > .child { ... }

/* 相邻兄弟选择器 */
h4 + p { color: #4a90e2; }

/* 通用兄弟选择器 */
h4 ~ span { color: #34c759; }`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. 属性选择器</h2>
      <Description>
        掌握属性选择器的使用方法：
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>[attr] - 具有attr属性的元素</li>
          <li>[attr="value"] - attr属性等于value的元素</li>
          <li>[attr^="value"] - attr属性以value开头的元素</li>
          <li>[attr$="value"] - attr属性以value结尾的元素</li>
        </ul>
      </Description>
      <AttributeDemo>
        <div data-type>基础属性选择器</div>
        <div data-type="primary">完全匹配</div>
        <div data-type="secondary-btn">开头匹配</div>
        <div data-type="system-warning">结尾匹配</div>
      </AttributeDemo>
      <CodeBlock>{`/* 基础属性选择器 */
[data-type] { background-color: #f0f9ff; }

/* 完全匹配 */
[data-type="primary"] { background-color: #4a90e2; }

/* 开头匹配 */
[data-type^="secondary"] { background-color: #34c759; }

/* 结尾匹配 */
[data-type$="warning"] { background-color: #ffcc00; }`}</CodeBlock>

      <h2 className="text-xl font-semibold mt-6 mb-4">选择器最佳实践</h2>
      <Description>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>选择器性能优化：
            <ul className="list-disc pl-6 mt-1">
              <li>避免过度嵌套</li>
              <li>避免使用通配符作为关键选择器</li>
              <li>使用类选择器替代复杂的选择器链</li>
            </ul>
          </li>
          <li>可维护性建议：
            <ul className="list-disc pl-6 mt-1">
              <li>使用语义化的类名</li>
              <li>保持选择器的简单和清晰</li>
              <li>避免过度依赖标签选择器</li>
            </ul>
          </li>
          <li>优先级管理：
            <ul className="list-disc pl-6 mt-1">
              <li>避免使用!important</li>
              <li>合理使用优先级</li>
              <li>使用BEM等命名方法论</li>
            </ul>
          </li>
        </ul>
      </Description>
    </Container>
  );
};

export default Lesson4;
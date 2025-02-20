import { useState } from 'react';
import styled from 'styled-components';
import { Container, Title, Description, DemoContainer as BaseDemo, CodeBlock } from '../components/Common';

const BoxModelDemo = styled.div<{ boxSizing: 'content-box' | 'border-box' }>`
  width: 200px;
  height: 200px;
  margin: 20px;
  border: 5px solid #4a90e2;
  padding: 20px;
  background-color: #f0f9ff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  box-sizing: ${props => props.boxSizing};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 15px;
    padding: 15px;
  }
`;

const ContentBox = styled.div`
  height: 100%;
  background-color: #4a90e2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.5rem;
`;

const DemoSection = styled(BaseDemo)`
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BoxSizingToggle = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: 2px solid #4a90e2;
  border-radius: 4px;
  background-color: ${props => props.active ? '#4a90e2' : 'transparent'};
  color: ${props => props.active ? 'white' : '#4a90e2'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: ${props => props.active ? '#357abd' : '#e6f3ff'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const SizingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;

  th, td {
    border: 1px solid #dee2e6;
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: #f8f9fa;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

const PracticalExample = styled.div`
  border: 2px solid #4a90e2;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  background-color: white;
  width: 200px;

  &.content-box {
    box-sizing: content-box;
  }

  &.border-box {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    width: 150px;
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const Lesson1 = () => {
  const [boxSizing, setBoxSizing] = useState<'content-box' | 'border-box'>('content-box');

  return (
    <Container>
      <Title>基础布局与盒模型</Title>
      <Description>
        盒模型是CSS中的一个基本概念，它定义了HTML元素如何显示以及如何计算它们的大小。
        每个HTML元素都可以看作是一个矩形盒子，它包含：内容(content)、内边距(padding)、边框(border)和外边距(margin)。
      </Description>

      <DemoSection>
        <h2 className="text-xl font-semibold mb-4">1. 盒模型基础展示</h2>
        <div className="flex justify-center items-center my-8">
          <BoxModelDemo boxSizing={boxSizing}>
            <ContentBox>
              {boxSizing === 'content-box' ? '内容区域\n(content-box)' : '内容区域\n(border-box)'}
            </ContentBox>
          </BoxModelDemo>
        </div>

        <div className="text-center mb-4">
          <BoxSizingToggle
            active={boxSizing === 'content-box'}
            onClick={() => setBoxSizing('content-box')}
          >
            Content Box
          </BoxSizingToggle>
          <BoxSizingToggle
            active={boxSizing === 'border-box'}
            onClick={() => setBoxSizing('border-box')}
          >
            Border Box
          </BoxSizingToggle>
        </div>

        <Description>
          上面的示例展示了一个基本的盒模型，包含以下部分：
        </Description>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>蓝色边框代表border (5px)</li>
          <li>浅蓝色背景区域代表padding (20px)</li>
          <li>中心的深蓝色区域代表content</li>
          <li>外部的空白区域代表margin (20px)</li>
        </ul>
      </DemoSection>

      <DemoSection>
        <h2 className="text-xl font-semibold mb-4">2. 盒模型类型对比</h2>
        <Description>
          CSS盒模型有两种类型：content-box（标准盒模型）和border-box（IE盒模型）。
          它们的主要区别在于宽度和高度的计算方式：
        </Description>

        <SizingTable>
          <thead>
            <tr>
              <th>盒模型类型</th>
              <th>width/height 计算方式</th>
              <th>特点</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>content-box</td>
              <td>只包含内容区域</td>
              <td>padding和border会增加元素的实际尺寸</td>
            </tr>
            <tr>
              <td>border-box</td>
              <td>包含内容、padding和border</td>
              <td>更直观，常用于现代布局</td>
            </tr>
          </tbody>
        </SizingTable>

        <CodeBlock>{`/* 设置盒模型类型 */
.element {
  box-sizing: content-box;  /* 标准盒模型 */
  /* 或 */
  box-sizing: border-box;   /* IE盒模型 */
}`}</CodeBlock>
      </DemoSection>

      <DemoSection>
        <h2 className="text-xl font-semibold mb-4">3. 实际尺寸计算</h2>
        <Description>
          以width: 200px的元素为例，计算其实际占用空间：
        </Description>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className="font-semibold mb-2">content-box:</h3>
            <CodeBlock>{`实际宽度 = width + padding-left + padding-right + border-left + border-right
200px + 20px + 20px + 5px + 5px = 250px`}</CodeBlock>
          </div>
          <div>
            <h3 className="font-semibold mb-2">border-box:</h3>
            <CodeBlock>{`实际宽度 = width（包含padding和border）
200px（其中内容区域宽度 = 200px - 40px - 10px = 150px）`}</CodeBlock>
          </div>
        </div>
      </DemoSection>

      <DemoSection>
        <h2 className="text-xl font-semibold mb-4">4. 常见应用场景</h2>
        <Description>
          在实际开发中，border-box通常更受欢迎，因为它让元素尺寸的控制更加直观。
          以下是一些实际应用场景：
        </Description>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className="font-semibold mb-2">基础示例对比</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-1">使用content-box:</h4>
                <PracticalExample className="content-box">
                  这个div的width被设置为200px，但加上padding和border后，实际宽度会超出。
                </PracticalExample>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">使用border-box:</h4>
                <PracticalExample className="border-box">
                  这个div的width被设置为200px，包含了padding和border，不会超出预期宽度。
                </PracticalExample>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">响应式布局中的应用</h3>
            <Description>
              在响应式布局中，border-box特别有用：
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>容器宽度设置为百分比时，padding不会破坏布局</li>
                <li>在使用CSS Grid或Flexbox时，更容易预测元素大小</li>
                <li>媒体查询中的断点计算更直观</li>
              </ul>
            </Description>
          </div>
        </div>

        <Description className="mt-6">
          推荐在项目中使用以下全局设置：
        </Description>
        <CodeBlock>{`/* 全局设置 */
* {
  box-sizing: border-box;
}

/* 如果需要特定元素使用content-box */
.special-element {
  box-sizing: content-box;
}`}</CodeBlock>

        <Description className="mt-4">
          注意事项：
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>在使用第三方组件时，注意检查其盒模型设置</li>
            <li>在处理旧代码时，可能需要逐步迁移到border-box</li>
            <li>某些特殊情况（如输入框的内部尺寸计算）可能需要使用content-box</li>
          </ul>
        </Description>
      </DemoSection>
    </Container>
  );
};

export default Lesson1;
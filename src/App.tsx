import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { lessons } from './lessons';
import Lesson1 from './lessons/Lesson1';
import Lesson2 from './lessons/Lesson2';
import Lesson3 from './lessons/Lesson3';
import Lesson4 from './lessons/Lesson4';
import Lesson5 from './lessons/Lesson5';
import Lesson6 from './lessons/Lesson6';
import Lesson7 from './lessons/Lesson7';
import Lesson8 from './lessons/Lesson8';
import Lesson9 from './lessons/Lesson9';
import Lesson10 from './lessons/Lesson10';
import Lesson11 from './lessons/Lesson11';
import Lesson13 from './lessons/Lesson13';
import Lesson14 from './lessons/Lesson14';
import Lesson15 from './lessons/Lesson15';
import Lesson16 from './lessons/Lesson16';
import Lesson17 from './lessons/Lesson17';
import Lesson18 from './lessons/Lesson18';
import Lesson19 from './lessons/Lesson19';
import Lesson20 from './lessons/Lesson20';
import Lesson22 from './lessons/Lesson22';
import Lesson23 from './lessons/Lesson23';
import Lesson24 from './lessons/Lesson24';
import Lesson25 from './lessons/Lesson25';
import Lesson26 from './lessons/Lesson26';
import Lesson28 from './lessons/Lesson28';
import Lesson29 from './lessons/Lesson29';
import Lesson30 from './lessons/Lesson30';
import Lesson31 from './lessons/Lesson31';
import CSSAnimationMastery from './lessons/CSSAnimationMastery';
import CSSEngineeringAndPerformance from './lessons/CSSEngineeringAndPerformance';
import GridLayoutGuide from './lessons/GridLayoutGuide';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const MainContent = styled.main`
  padding: 2rem 0;
`;

const LessonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const LessonCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          <Nav>
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              CSS 学习平台
            </Link>
          </Nav>
        </Header>

        <MainContent>
          <Routes>
            <Route path="/" element={
              <LessonGrid>
                {lessons.map(lesson => (
                  <Link key={lesson.id} to={lesson.path}>
                    <LessonCard>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">{lesson.title}</h2>
                      <p className="text-gray-600">{lesson.description}</p>
                    </LessonCard>
                  </Link>
                ))}
              </LessonGrid>
            } />
            <Route path="/lesson1" element={<Lesson1 />} />
            <Route path="/lesson2" element={<Lesson2 />} />
            <Route path="/lesson3" element={<Lesson3 />} />
            <Route path="/lesson4" element={<Lesson4 />} />
            <Route path="/lesson5" element={<Lesson5 />} />
            <Route path="/lesson6" element={<Lesson6 />} />
            <Route path="/lesson7" element={<Lesson7 />} />
            <Route path="/lesson8" element={<Lesson8 />} />
            <Route path="/lesson9" element={<Lesson9 />} />
            <Route path="/lesson10" element={<Lesson10 />} />
            <Route path="/lesson11" element={<Lesson11 />} />
            <Route path="/lesson13" element={<Lesson13 />} />
            <Route path="/lesson14" element={<Lesson14 />} />
            <Route path="/lesson15" element={<Lesson15 />} />
            <Route path="/lesson16" element={<Lesson16 />} />
            <Route path="/lesson17" element={<Lesson17 />} />
            <Route path="/lesson18" element={<Lesson18 />} />
            <Route path="/lesson19" element={<Lesson19 />} />
            <Route path="/lesson20" element={<Lesson20 />} />
            <Route path="/lesson22" element={<Lesson22 />} />
            <Route path="/lesson23" element={<Lesson23 />} />
            <Route path="/lesson24" element={<Lesson24 />} />
            <Route path="/lesson25" element={<Lesson25 />} />
            <Route path="/lesson26" element={<Lesson26 />} />
            <Route path="/lesson28" element={<Lesson28 />} />
            <Route path="/lesson29" element={<Lesson29 />} />
            <Route path="/lesson30" element={<Lesson30 />} />
            <Route path="/lesson31" element={<Lesson31 />} />
            <Route path="/css-animation-mastery" element={<CSSAnimationMastery />} />
            <Route path="/css-engineering-performance" element={<CSSEngineeringAndPerformance />} />
            <Route path="/grid-layout-guide" element={<GridLayoutGuide />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;

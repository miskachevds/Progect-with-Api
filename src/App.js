import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Articles from './Articles'
import Layout from './components/Layout';
import AboutInfo from './AboutInfo'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}> 
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/:id" element={<AboutInfo />} />
        <Route path="/articles" element={<Articles />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

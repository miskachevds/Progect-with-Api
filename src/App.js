import {Routes, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Articles from './Articles'
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li><NavLink to="/">Home page</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/articles">Articles</NavLink></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;

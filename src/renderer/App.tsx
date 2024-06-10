import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import logo from '../../assets/img/logos/scrutiny-logo-text-128x448.png';
import './App.css';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="400" alt="icon" src={logo} />
      </div>
      <h1>Scrutiny GUI</h1>
      <div className="Hello">
        <a
          href="https://scrutinydebugger.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Check the website
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

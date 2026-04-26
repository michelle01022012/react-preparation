import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed 'Route' typo
import Home from './pages/Home';
import Posts from './pages/Posts'; // Ensure this is imported

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Posts />} />
        </Routes>
      </div>
    </Router>        
  );
}

export default App;
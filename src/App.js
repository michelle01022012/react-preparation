import { BrowserRouter as Router, Routes, Rout } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}</Route>
          <Route path=":id" element={<Posts />}></Route>
        </Routes>
      </div>
    </Router>        
  );
}

export default App;

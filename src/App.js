import {Home} from './pages/home/home.jsx'
import {Login} from './pages/login/login.jsx';
// import {Signup} from './pages/signup/signup';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
            <Router>
      <Routes>
                  <Route path="/login" exact element={<Login />}/>
                  {/* <Route path="/signup" exact element={<Signup />}/> */}
                  <Route path="/home" exact element={<Home />} />
                  <Route path="*" element={<Navigate to="/login" replace />} />
              </Routes>
      </Router>
    </div>
  );
}

export default App;

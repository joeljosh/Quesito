import { Home } from './pages/home/home.jsx'
import { Login } from './pages/login/login.jsx';
import { Quiz } from './pages/quiz/quiz.jsx';
import { Report } from './pages/report/report.jsx';
import Signup from './pages/signup/signup';
import { AuthProvider } from "./contexts/authContexts"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoute from "./privateroute"
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route exact path='/' element={<PrivateRoute />}>
              <Route path="/home" exact element={<Home />} />
              <Route path="/quiz" exact element={<Quiz />} />
              <Route path="/report" exact element={<Report />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;

import { React } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Components/dashboardPage/Dashboard';
import Login from './Components/LoginPage/Login';
import SignupPage from './Components/Signuppage/SignupPage';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

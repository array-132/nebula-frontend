// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Base from './components/Base'
import {ToastContainer} from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './pages/user-routes/UserDashboard';
import PrivateRoute from './components/PrivateRoute';
import ProfileInfo from './pages/user-routes/ProfileInfo';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/user" element={<PrivateRoute/>}>
            <Route path="dashboard" element={<UserDashboard/>}/>
            <Route path="profile-info" element={<ProfileInfo/>}/>
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
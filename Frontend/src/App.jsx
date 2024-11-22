import { Route,Routes,Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/signUp'
import { Toaster } from 'react-hot-toast'
import {useAuthContext} from './authContext/authContext'



function App() {
  const {authUser} = useAuthContext()
  return (
    <div className='p-4 max-h-screen flex items-center justify-center pl-0 ml-0 bg-gray-100'>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={authUser?<Home/>:<Navigate to='/login' />} />
        <Route path="/signup" element={authUser? <Navigate to='/'/>: <SignUp />} />
        <Route path="/login" element={authUser? <Navigate to='/'/>:<Login />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App

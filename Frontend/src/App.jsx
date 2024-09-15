import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/signUp'
import ChatApp from './components/chatpanel/chatpanel'

function App() {

  return (
    <div className='p-4 max-h-screen flex items-center justify-center pl-0 ml-0 bg-slate-800'>
      {/* <SignUp/> */}
      <ChatApp/>
    </div>
  )
}

export default App

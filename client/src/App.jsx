import React from 'react'
import './App.css'
import Home from './Home'
import CreatePost from './CreatePost'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import logo from './assets/palette.svg'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <header className='flex justify-between items-center px-[5vw] py-[20px] mb-[20px]'>
          <Link to="/">
            <div className="logo">
              <img className='logo-img' src={logo} alt="logo" />
              <h1 className='logo-text'>pA.Int</h1>
            </div>
          </Link>
          <Link to="/create-post" className='create-btn'>Create</Link>
        </header>
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-post' element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'
import './App.css'
import { useContext } from 'react'
import { AppContext } from './Pages/Context/AppContext'
import Create from './Pages/Pages/Create'
import Show from './Pages/Pages/Show'
import Update from './Pages/Pages/Update'

export default function App() {
  const {user} = useContext(AppContext);

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />

        <Route path='/register' element={user ? <Home/> : <Register/>} />
        <Route path='/login' element={user ? <Home/> : <Login />} />
        <Route path='/create' element={user ? <Create/> : <Login />} />
        <Route path='/posts/:id' element={<Show />} />
        <Route path='/posts/update/:id' element={user ? <Update /> : <Login/> } />

      </Route>
    </Routes>
  </BrowserRouter>
}


import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'
import CreateBook from './pages/CreateBook'

const App = () => {
  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/deletebook' element={<DeleteBook />} />
      <Route path='/show' element={<ShowBook />} />
      <Route path='/create' element={<CreateBook />} />
      <Route path='/edit' element={<EditBook />} />
    </Routes>
  )
}

export default App

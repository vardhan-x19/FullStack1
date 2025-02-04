import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'
import CreateBook from './pages/CreateBook'
import Error from './Components/Error'
const App = () => {
  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/deletebook' element={<DeleteBook />} />
      <Route path='/show/:id' element={<ShowBook />} />
      <Route path='/create' element={<CreateBook />} />
      <Route path='/update/:data' element={<EditBook />} />
      <Route path='/err' element={<Error />} />
    </Routes>
  )
}

export default App

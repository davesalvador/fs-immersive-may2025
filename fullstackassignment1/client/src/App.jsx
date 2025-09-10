import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import BookList from './components/BookList.jsx'
import BookDetails from './components/BookDetails.jsx'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook.jsx'

function App() {


  return (
    <>
     <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Navigate to='/books' />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<BookDetails />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/edit-book/:id' element={<EditBook />} />
        <Route path='*' element={<h2>Page Not Found</h2>} />
      </Routes>
     </div>
    </>
  )
}

export default App

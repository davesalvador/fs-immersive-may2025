import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BooksAPi } from '../api/api.js'


function BookList() {

    const [books, setBooks] = useState([])
    const [ loading , setLoading ] = useState(true)
    const [error , setError] = useState('')
    const navigate = useNavigate()

    const load = async () => {
        try{
            setLoading(true)
            setBooks(await BooksAPi.list())
        }catch (error){
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load()
    }, [])

    const onDelete = async (id) => {
        if(!confirm("Are you sure you want to delete this book?")) return;
        try{
            await BooksAPi.delete(id)
            setBooks((prev) => prev.filter((book) => book._id !== id))
        }catch (error){
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <div>Loading...</div>
    if(error) return <div className='error'>{error}</div>




  return (
    <section>
        <h2>Book List</h2>
        {books.length === 0 ? (
            <div>No books available</div>
        ) : (
            <ul>
                {books.map((book) => (
                    <li key={book._id}>
                        <Link to={`/books/${book._id}`}>{book.title}</Link>
                        <button onClick={() => onDelete(book._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        )}
    </section>
  )
}

export default BookList
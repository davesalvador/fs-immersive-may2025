import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to ="/books" > Books</Link>
        <nav>
            <NavLink to ="/books"> All Books</NavLink>
            <NavLink to ="/books/new"> Add book</NavLink>
        </nav>
    </div>
  )
}

export default Nav
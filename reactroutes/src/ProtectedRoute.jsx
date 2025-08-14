import { Navigate } from "react-router-dom"


const ProtectedRoute = ({ isLoggedIn, children }) => {
    // - isLoggedIn: Boolean indicating if the user is authenticated
    // - children: The protected page/component to render if allowed
    if (!isLoggedIn) {
        // if not logged in, redirect to the login page
        // "replace" avoids adding a new entry in the history stack
        return <Navigate to="/login" />
    }
    // if logged in, render the protected children
    return children
}

export default ProtectedRoute;
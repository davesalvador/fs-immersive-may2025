import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "./components/home.jsx";
import Blogs from "./components/blogs.jsx";
import Contacts from "./components/contacts.jsx";
import Nope from "./components/nope.jsx";
import Login from "./components/Login.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {
  const isLoggedIn = false; // This should be replaced with actual authentication logic
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Nope />} />


          {/* {ProtectedRoute} */}
          <Route
            path="/blogs"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Blogs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

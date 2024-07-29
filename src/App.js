import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const dn = localStorage.getItem("displayName")

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      
      <nav>
        <NavLink to="/" className={(e)=>e.isActive?"active":""}> Home </NavLink>

        {!isAuth ? (
          <NavLink to="/login" className={(e)=>e.isActive?"active":""}> Login </NavLink>
        ) : (
          <>
            <NavLink to="/createpost" className={(e)=>e.isActive?"active":""}> Create Post </NavLink>
            <button className="btn" onClick={signUserOut}> Log Out</button>
          </>
        )}
        
        {isAuth && <div>Welcome <span style={{'font-size': '22px', 'margin-left': '8px', 'font-weight': '600'}}>{dn}</span></div>}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;

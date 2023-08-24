import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <nav className="navbar">
<div className="title">Go Foods</div>
    <div className="nav-item effect"><Link to="/">Home</Link></div>
    {cookies.access_token && (
      <>
        <div className="nav-item effect"><Link to="/create-recipe">Create Recipe</Link></div>
        <div className="nav-item effect"><Link to="/saved-recipes">Saved Recipes</Link></div>
      </>
    )}
    {!cookies.access_token ? (
      <>
      <div class="nav-item 3d-effect"><Link to="/auth">Login/Register</Link></div>
      </>
    ) : (
      <button onClick={logout}  className="log"> <span>Logout</span><i></i></button>
    )}
  </nav>
  
  );
};




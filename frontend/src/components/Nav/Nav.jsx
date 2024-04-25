import "./nav.css"

import { Link } from "react-router-dom";
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Nav = () => {
  const navigate = useNavigate();


  // Navigate to the /home route
  const goHome = () => {
    navigate('/home');
  };

  //Navigate to /favorites
  const toFavorites = () => {
    navigate('/favorites')
  }

  //Navigate to /
  const toLanding = () => {
    navigate('/')
  }

  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a427c151-bc66-4719-a86e-a088ddc3eb01/d5uuifg-0c2929d0-ae8b-4129-91f2-b52fee25627d.png/v1/fill/w_498,h_498/love_ball_by_yakumokaiba_d5uuifg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk4IiwicGF0aCI6IlwvZlwvYTQyN2MxNTEtYmM2Ni00NzE5LWE4NmUtYTA4OGRkYzNlYjAxXC9kNXV1aWZnLTBjMjkyOWQwLWFlOGItNDEyOS05MWYyLWI1MmZlZTI1NjI3ZC5wbmciLCJ3aWR0aCI6Ijw9NDk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.uYkSvmeR62C9fo3BUkhnsbrcAJb7JkwHg_GxrmtX7Eg" alt="loveBall" className="logo" />
        </Link>
      </div> <br/>
      <div className="links-container">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
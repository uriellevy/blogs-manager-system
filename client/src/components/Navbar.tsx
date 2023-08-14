import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import "../App.scss";
import { AuthContext, AuthContextType } from '../context/authContext';
import { DICT } from '../consts/consts';



const Navbar = () => {
  const {ART, SCIENCE, TECHNOLOGY, DESIGN, CINEMA, FOOD, LOGIN, LOGOUT, WRITE} = DICT;
  const { currentUser, logout } = useContext(AuthContext) as AuthContextType;

    return (
        <div className="navbar">
          <div className="container">
            <div className="logo">
              <Link to="/">
              <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="links">
              <Link className="link" to="/?cat=art">
                <h6>{ART}</h6>
              </Link>
              <Link className="link" to="/?cat=science">
                <h6>{SCIENCE}</h6>
              </Link>
              <Link className="link" to="/?cat=technology">
                <h6>{TECHNOLOGY}</h6>
              </Link>
              <Link className="link" to="/?cat=cinema">
                <h6>{CINEMA}</h6>
              </Link>
              <Link className="link" to="/?cat=design">
                <h6>{DESIGN}</h6>
              </Link>
              <Link className="link" to="/?cat=food">
                <h6>{FOOD}</h6>
              </Link>
              <span>{currentUser?.username}</span>
              {currentUser ? (
                <span onClick={logout}>{LOGOUT}</span>
              ) : (
                <Link className="link" to="/login">
                  {LOGIN}
                </Link>
              )}
              <span className="write">
                <Link className="link" to="/write">
                  {WRITE}
                </Link>
              </span>
            </div>
          </div>
        </div>
      );
}

export default Navbar
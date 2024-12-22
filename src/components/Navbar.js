import React from "react";
import logo from "../photo/clapperboard (1).png";
import {NavLink} from 'react-router-dom'
import{useContext} from "react";
import UserContext from '../context/userContext'

export default function Navbar() {
   const {setUsername,username}=useContext(UserContext)
   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand" style={{ color: "#d4af37" }} href="#">
                    <img src={logo} alt="Logo" className="logo" /> PrimePick
                </div>
                <div className="threebutton">
                <button
                    className="navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon "></span>
                </button>
                </div>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item1">
                            <NavLink to="/home" onClick={()=>{setUsername("")}} style={{ marginTop: "15px !important" }}  className={({isActive})=>`"nav-link active darkElement ${isActive? "activee": "nonactivee"} " aria-current="page" `}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/discover" onClick={()=>{setUsername("")}} className={({isActive})=>`"nav-link active darkElement ${isActive? "activee": "nonactivee"} " aria-current="page" `}>Discover</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/new" className={({isActive})=>`"nav-link active darkElement ${isActive? "activee": "nonactivee"} " aria-current="page"`}>New</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/popular" className={({isActive})=>`"nav-link active  darkElement ${isActive? "activee": "nonactivee"} " aria-current="page"`}>Popular</NavLink>
                        </li>
                        <li className="nav-item6">
                       <NavLink to="/search" className="alink" ><div className="search-container ">
                          <input type="text" className="search-input bg-dark text-light " value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Search for Movies" />
                           <button className="search-button darkElement bg-dark " >
                                <i className="fas fa-search"></i>
                            </button>
                            
                        </div>
                        </NavLink> 
                        </li>
                    </ul>
                    <div className="d-flex flex-column flex-lg-row">
                        <div className="form-check form-switch darkElement">
                            <input className="form-check-input bg-dark" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label " htmlFor="flexSwitchCheckDefault ">Light Mode</label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

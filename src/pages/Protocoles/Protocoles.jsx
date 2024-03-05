import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './protocoles.scss'
import { Link } from "react-router-dom";


const Protocoles = () => {
  return (
    <div className="protocoles">
      <Sidebar/>
      <div className="protocolesContainer">
        <Navbar/>  
        
        <div className="protocoleButton">
          <Link to="/Protocole1" style={{ textDecoration: "none" }}>
          <button>protocole 1</button>
          </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
        <button>protocole 2</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 3</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 4</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 5</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 6</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 7</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 8</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 9</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 10</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 11</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 12</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 13</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 14</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 15</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 16</button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }} >
        <button>protocole 17</button>
        </Link>
        
        
      </div>
      </div>
      
      
    </div>
  )
}

export default Protocoles

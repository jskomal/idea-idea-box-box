import React from 'react'
import './NavBar.css'
import navIcon from '../../assets/nav.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='nav-bar'>
      <img
        src={navIcon}
        alt='nav-bar icon'
        onClick={(e) => setIsOpen((prev) => !prev)}
        className={`nav-icon ${isOpen ? 'active-icon' : ''}`}
      />
      <div className={`side-bar ${isOpen ? 'active' : ''}`}>
        <div className='nav-buttons'>
          <NavLink to='/saved'>
            <button>Saved Ideaboxes</button>
          </NavLink>
          <NavLink to='/create'>
            <button>Create Your Own</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar

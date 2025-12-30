import React from 'react'
import "./NavBarElement.css"


const NavBarElement = ({ title, icon, onClick }) => {
  return (
    <div className='navbar_element'>
      <div className="nav_item_cont">
        <span>{icon}</span><p>{title}</p>
      </div>
    </div>
  )
}

export default NavBarElement
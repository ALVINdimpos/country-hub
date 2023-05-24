import React from 'react'
import './navBar.css'
function navBar() {
  return (
    <>
    <nav>
       <h1>Where in the world?</h1> 
        <button>
            <i className="fas fa-moon"></i>
            Dark Mode
        </button>
    </nav>
    
    </>
  )
}

export default navBar
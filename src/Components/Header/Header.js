import React from 'react'
import Burger from './Burger/Burger'
import './header.css'

import Logo from '../../img/responsive_fonc‚.png'

function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className={isOpen ? 'header open' : 'header'}>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen ? '' : <img className="logo" src={Logo} alt="logo SENS" />}
            
        </div>
    );
  }
  
  export default Header;
import React, {useEffect} from 'react'
import useWindowDimensions from './useWindowDimension'
import './burger.css'
import './desktop.css'

import Instagram from '../../../img/icon_instagram.svg'
import Facebook from '../../../img/icon_facebook.svg'
import LinkedIn from '../../../img/icon_linkedin.svg'
import LogoFonce from '../../../img/logo_sens_fonc.png'


const Burger = ({isOpen, setIsOpen}) => {

  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = React.useState()
    useEffect(() => {
      width > 750 ? setIsMobile(false) : setIsMobile(true)
    }, [width]);

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }

    return (
      <>
      {isMobile ? 
      <div
        id="burger-par"
        onClick={isOpen ? null : () => setIsOpen(isOpen ? false : true)}
        className={isOpen ? "burger-open" : "burger"}
        >
          <div
            id="burger"
            class={isOpen ? "burger-lines-open" : "burger-lines"}
          >
              {
                isOpen ?
                <>
                <div onClick={() => setIsOpen(isOpen ? false : true)} className='close'></div>
                 <nav className='burger-nav'> 
                   <div onClick={() => scrollToSection('main')}>Accueil</div>
                   <div onClick={() => scrollToSection('definition')}>Définition</div>
                   <div onClick={() => scrollToSection('video')}>Film</div>
                   <div onClick={() => scrollToSection('entrepreneur')}>Témoignages</div>
                   <div onClick={() => scrollToSection('humaniste')}>Conseils</div>
                 </nav> 
                 <div class="separator-burger"> </div>
                 <div class="social">
                    <a href="https://www.linkedin.com/company/sens-positif/about/?viewAsMember=true"> <img src={Instagram} alt="icon facebook"/> </a>
                    <a href="https://www.facebook.com/SENS-Positif-104600358726151"> <img src={Facebook} alt="icon linkedin"/> </a>
                    <a href="https://www.instagram.com/sens.positif/"> <img src={LinkedIn} alt="icon instagram"/> </a>
                </div>
                 </>
                 : ''
              }

          </div>
      </div> 
      : 
      
      <nav  className='desktop-nav'> 
        <img className="logoFonce" src={LogoFonce} alt="logo SENS" />
        <div class="desktop-nav-container">
          <div onClick={() => scrollToSection('definition')}>Définition</div>
          <div onClick={() => scrollToSection('video')}>Film</div>
          <div onClick={() => scrollToSection('entrepreneur')}>Témoignages</div>
          <div onClick={() => scrollToSection('humaniste')}>Conseils</div>
          <div onClick={() => scrollToSection('newsletter')}class="sub">S'inscrire</div>
        </div>
      </nav>  } </>
        
    );
  }
  
  export default Burger;
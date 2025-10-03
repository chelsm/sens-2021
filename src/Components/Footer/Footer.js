import React from 'react'
import './footer.css'
import Newsletter from './Newsletter/Newsletter'
import Logo from '../../img/logo_sens_clair.png'
import Instagram from '../../img/icon_instagram.svg'
import Facebook from '../../img/icon_facebook.svg'
import LinkedIn from '../../img/icon_linkedin.svg'
import PolotiquePDF from '../../img/Politique_de_confidentialites.pdf'
import MentionsPDF from '../../img/Mentions_Legales.pdf'
import RevuePressePDF from '../../img/Revue_de_Presse.pdf'


function Footer() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
      }
  
    return (
        <div class="footer-section">
            <Newsletter/>
            <div class='separator'></div>

            <div class="footer-container">
                <div class="footer-icon">
                    <a href="https://www.linkedin.com/company/sens-positif/about/?viewAsMember=true"> <img src={Instagram} alt="icon facebook"/> </a>
                    <a href="https://www.facebook.com/SENS-Positif-104600358726151"> <img src={Facebook} alt="icon linkedin"/> </a>
                    <a href="https://www.instagram.com/sens.positif/"> <img src={LinkedIn} alt="icon instagram"/> </a>
                </div>

                <div class="mention-section">
                    <h4 class="home">
                        <div onClick={() => scrollToSection('main')}>Accueil</div>
                    </h4>
                    <h4 class="rev-press">
                        <a href={RevuePressePDF}>Revue de presse</a>
                    </h4>
                    <h4 class="mention-leg">
                        <a href={MentionsPDF} target="_blank" rel="noreferrer" >Mention légales</a>
                    </h4>
                    <h4 class="pol-conf">
                        <a href={PolotiquePDF} target="_blank" rel="noreferrer">Politique de confidentialités</a>
                    </h4>
                    <h4 class="mailto">
                        <a href="mailto:relations.sens@gmail.com">Nous contacter</a>  
                    </h4>
                </div>
                <img class="footer-logo" src={Logo} alt="logo sens"/>

            </div>
        </div>
    );
  }
  
export default Footer;
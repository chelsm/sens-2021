import React from 'react'
import './definition.css'
import Guillement from '../../img/guillemet.svg'


function Definition() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }

    return (
        <div id="definition" class="definition-section">
            <div class="bg-def">
                <h2 class="definition-title">
                    <span class="blue-title">L'entrepreneuriat local à impact positif, </span>
                    <span class="red-title">qu’est-ce que c’est ?</span>
                </h2>
            
                <div class="definition-part">
                    <div class="definition-text">
                        <img class ="guillemet-left"src={Guillement} alt="guillemet de gauche" /> 
                        <p>
                            L’objectif est de concilier business et éthique en répondant aux grands enjeux de société pour 
                            créer un avenir meilleur. C’est placer l’efficacité économique au service de l’intérêt général.
                        </p>
                        <img class ="guillemet-right"src={Guillement} alt="guillemet de droite" /> 
                        <h3>Prêts à faire le pas ?</h3>
                    </div>
                    <div class="definition-btn">
                        <button id="myBtn" class="showMoreBtn" onClick={() => scrollToSection('humaniste')}>
                            Nos conseils
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Definition;
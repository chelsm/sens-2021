import React from 'react'
import './tips.css'
import Zone from '../Zone/Zone'
import Stand from '../../img/stand.svg'
import Balance from '../../img/balance.svg'
import Cartable from '../../img/cartable.svg'
import Mains from '../../img/mains.svg'
import Background from '../../img/bg_tips.svg'

function Video() {

    return (
        <div id="humaniste" class="tips-section">
                <img class="bg"src={Background} alt="second conseil" />

            <div class="tips-title">
                <Zone/>
                <h2>Ce qu’il faut savoir sur l’entrepreneuriat</h2>
                <p>
                    Être un entrepreneur positif c’est revenir à l'essentiel, allier
                    épanouissement personnel et engagements sans pour autant négliger
                    l’objectif économique de votre entreprise.
                </p>
            </div>
            <div class="tips-part">
                <div class="first-part tip">
                    <div class="tip-content">
                        <h3 class="tip-text"> 
                            <span class="number">1</span>
                            N'ayez pas peur de l'echec
                        </h3>
                        <p>
                            L’équilibre idéal est propre à chacun et peut parfois prendre du temps à se mettre en place.
                        </p>
                    </div>
                    <img src={Stand} alt="premier conseil" />

                </div>
                <div class="second-part tip">
                    <div class="tip-content">
                        <h3 class="tip-text">
                            <span class="number">2</span>
                            Trouver un équilibre
                        </h3>
                        <p>
                            L’équilibre idéal est propre à chacun et peut parfois prendre du temps à se mettre en place.
                        </p>
                    </div> 
                    <img src={Balance} alt="second conseil" />

                </div>
                <div class="third-part tip">
                    <div class="tip-content">
                        <h3 class="tip-text">
                            <span class="number">3</span>
                            Soyez passionné
                        </h3>
                        <p>
                            Avant de se lancer dans un projet, assurez-vous de l’aimer afin de vous y consacrer à 100% !
                        </p>
                    </div> 
                    <img src={Cartable} alt="troixieme conseil" />
                </div>
                <div class="fourth-part tip">
                    <div class="tip-content">
                        <h3 class="tip-text">
                            <span class="number">4</span>
                            Créer des liens
                        </h3>
                        <p>
                            Interréssez-vous à votre environnement, qui sait vous allez peut-être faire une rencontre pleine de richesses. 
                        </p>
                    </div> 
                    <img src={Mains} alt="quatrieme conseil" />
                </div>
            </div>
        </div>
    );
  }
  
export default Video;
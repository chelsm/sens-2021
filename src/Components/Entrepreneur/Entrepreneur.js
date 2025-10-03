import React, {useState} from 'react'
import './entrepreneur.css'
import Zone from '../Zone/Zone'
import Portrait_Laurent from '../../img/Portrait_Laurent.webp'
import Portrait_Elena from '../../img/Portrait_Elena.webp'
import Portrait_Olivier from '../../img/Portrait_Olivier.webp'
import Mic from '../../img/mic.svg'
import StandCake from '../../img/stand_cake.svg'
import StandPlant from '../../img/stand_plant.svg'
import StandPink from '../../img/stand_pink.svg'
import Carousel from 'react-elastic-carousel';
import AudioElena from '../../img/Audio_Elena.mp3'
import AudioLaurent from '../../img/Audio_Laurent.mp3'
import AudioOlivier from '../../img/Audio_Olivier.mp3'


function Entrepreneur() {

    const [play1, setPlay1] = useState(false);
    const [play2, setPlay2] = useState(false);
    const [play3, setPlay3] = useState(false);

    function playAudio(audio){ 
        const els = document.querySelectorAll('.player')
        if (audio === "player1" ){
            const flag1 = !play1
            setPlay1(!play1)
            if(flag1 && els[0]){
                els[0].play();
            }
            else if(els[0]){
                els[0].pause();
            };
        }
        if (audio === 'player2'){
            const flag2 = !play2
            setPlay2(!play2)
            if(flag2 && els[1]){
                els[1].play();
            }
            else if(els[1]){
                els[1].pause();
            };
        }
        if (audio === 'player3'){
            const flag3 = !play3
            setPlay3(!play3)
            if(flag3 === true){
                els[2].play();
            }
            else if(els[2]){
                els[2].pause();
            };
        }
    }


    return (
        <div id="entrepreneur" class="entrepreneur-section">
            <div class="entrepreneur-title">
                <Zone/>
                <h2>Les entrepreneurs en parlent</h2>
            </div>
            
            <Carousel>
                <div class="entrepreneur-zone">
                    <img class="stand" src={StandCake}  alt="icon stand" />

                    <div class="entreneur-container">
                        <div class="identity">
                            <div id="pic">
                                <img class="fit-picture" src={Portrait_Laurent} alt="Portrait de Laurent Frbezar" />
                            </div>
                            <div class="person">
                                <h2 class="first-name name">Laurent</h2>
                                <h2 class="last-name name">Foncière</h2>
                                <span id="status">Traiteur indépendant</span>
                            </div>
                        </div>
                        <p class="history">
                            Je suis devenu entrepreneur pour être indépendant et faire
                            mes propres choix. Et surtout de retrouver le plaisir de cuisiner, de partager avec les
                            gens et de faire quelque chose qui me passionne.
                        </p>
                        <div class="entrepreneur-audio">
                            <audio  id="player1" class="player" src={AudioLaurent} type="audio/mp3">	 </audio>
                            <img class={play1 ? "mic-picture" :  "mic-rotate"} src={Mic} onClick={()=> playAudio("player1")} alt="icon mic" />
                        </div>

                    </div>
                </div> 
                <div class="entrepreneur-zone">
                    <img class="stand" src={StandPlant} alt="icon stand" />

                    <div class="entreneur-container">
                        <div class="identity">
                            <div id="pic">
                                <img class="fit-picture" alt ="Portrait de Elena Olimpe"src={Portrait_Elena}/>
                            </div>
                            <div class="person">
                                <h2 class="first-name name">Elena</h2>
                                <h2 class="last-name name">Olimpe</h2>
                                <span id="status">Jardinière paysagiste</span>
                            </div>
                        </div>
                        <p class="history">
                           Entreprendre c'est évidemment une prise de responsabilité, beaucoup de travail et de 
                           temps. Pour moi, c'est aussi ramener de la nouveauté, se réinventer constamment. C'est 
                           créer une relation priviligiée avec ses clients. Le relationnel compte beaucoup pour moi.
                        </p>
                        <div class="entrepreneur-audio">
                            <audio  id="player2" class="player" src={AudioElena} type="audio/mp3">	 </audio>
                            <img class={play2 ? "mic-picture" :  "mic-rotate"} src={Mic} onClick={()=> playAudio("player2")} alt="icon mic" />
                            
                        </div>
                    </div>
                </div> 
                <div class="entrepreneur-zone">
                    <img class="stand" src={StandPink} alt="icon stand" />

                    <div class="entreneur-container">
                        <div class="identity">
                            <div id="pic">
                                <img class="fit-picture" alt ="Portrait de Olivier Barbeau" src={Portrait_Olivier}/>
                            </div>
                            <div class="person">
                                <h2 class="first-name name">Olivier</h2>
                                <h2 class="last-name name">Barbeau</h2>
                                <span id="status">Créateur de bougie</span>
                            </div>
                        </div>
                        <p class="history">
                           Les offres d'emploi ne correspondent pas à ce que je voulais faire et allaient
                           à l'encontre de mes idéaux. J'avais besoin d'etre plus en alignement avec
                           mes valeurs c'est pourquoi je me suis lancée dans l'entrepreneuriat.
                        </p>
                        <div class="entrepreneur-audio">
                            <audio  id="player3" class="player" src={AudioOlivier} type="audio/mp3">	 </audio>
                            <img class={play3 ? "mic-picture" :  "mic-rotate"} src={Mic} onClick={()=> playAudio("player3")} alt="icon mic" />
                        </div>
                    </div>
                </div> 
            </Carousel>
        </div>
    );
  }
  
  export default Entrepreneur;    
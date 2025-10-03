import React from 'react'
import './main.css'
import LogoBleu from '../../img/logo_bleu.svg'
import Home from '../../img/home.svg'

function Main() {
    
    return (
        <div id ="main" class="main-section">
            <div class="main-title main-part">
                <span class="upper ">Parlons</span>
                <span class="upper bold ">entrepreneuriat </span>
                <span class="low bold">avec
                    <img src={LogoBleu} alt="second conseil" />
                </span>
                
            </div>
            <div class="main-information main-part">
                <h2>Le dispositif qui vous dit tout sur l’entreprenariat.</h2>
                <span>
                    Vous hésitez à vous lancer dans l’entrepreneuriat, car le 
                    salariat ne vous correspond pas ? Vous êtes en quête de sens ? 
                    Vous êtes au bon endroit !
                </span>
            </div>
            
            <div class="main-img">
                <img src={Home} alt="imgae de fond" />
            </div>
        </div>
    );
  }
  
export default Main;
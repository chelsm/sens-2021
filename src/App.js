import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import './App.css';
// import Newsletter from "./Components/Newsletter/Newsletter"
// import logoClair from './img/logo_sens_clair.png'
// import Facebook from './img/facebook.png'
// import Linkedin from './img/linkedin.png'
// import Instagram from './img/insta.png'


import Header from './Components/Header/Header'
import Definition from './Components/Definition/Definition'
import Main from './Components/Main/Main'
import Float from './Components/Float/Float'
import Video from './Components/Video/Video'
import Tips from './Components/Tips/Tips'
import Entrepreneur from './Components/Entrepreneur/Entrepreneur'
import Footer from './Components/Footer/Footer'

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    document.querySelector("input[type='email']").placeholder='Adresse mail';
    document.querySelector("input[type='email']").parentNode.lastChild.textContent="s'inscrire";
  });

  const scrollToDefinition = () => {
    const element = document.getElementById("definition");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
  }

  window.axeptioSettings = {
    clientId: "61a9d351f044c26fb61ba729",
  };
   
  (function(d, s) {
    var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
    e.async = true; e.src = "//static.axept.io/sdk.js";
    t.parentNode.insertBefore(e, t);
  })(document, "script");

  return (
    <div class="app">
      <Header/>
      <Main/>
      <div onClick={scrollToDefinition}>
        <div class="scroll-down"></div>
      </div>
      <Definition/>
      <Video/>
      <Entrepreneur/>

      <Tips/>
      <Float/>
      <Footer/>
    </div>
  );
}

export default App;

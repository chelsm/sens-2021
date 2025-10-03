import React from 'react'
import './video.css'
import Cube from '../../img/cube_cercle.svg'
import Camera from '../../img/camera.svg'


function Video() {

    return (
        <div id="video" class="video-section">
            <img class="bg_cube" src={Cube} alt="img de fond" />
            <div class="video-title">
                <div class="video-bar"></div>
                <h2>Avez-vous déjà entendu parler de l'entrepreneuriat positif ?</h2>
                <span>à vos popcorn !</span>
            </div>
            <div class="video-zone">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OsraeNr3JLU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <img class="bg_camera" src={Camera} alt="video" />
        </div>
    );
  }
  
export default Video;
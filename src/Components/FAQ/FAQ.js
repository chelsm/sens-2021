import React, {useState} from 'react'
import './faq.css'
import iconSens from '../../img/responsive_fond fonc‚.png'
import icon from '../../img/icon.svg'
import iconSensclaire from '../../img/responsive_fond cllair.png'


function FAQ() {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);  

    const scrollToMessage = (id) => {
        
        const element = document.getElementById(id);
        element ? element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"}) : void(0)
    }


    return (
        <div class="faq-section">
            <div class="faq-header"> <img src={iconSensclaire} alt='icon-sens'/> F.A.Q </div>
            <div class="chat"> 
                <div class="sens-message"> 
                    <div class="icon blue"> <img src={iconSens} alt='icon-sens'/> </div>
                    <div class="message blue">  
                        <p>En quoi puis-je vous aider ? </p>
                    </div>
                </div>

                <div onClick={() => {setShow1(!show1); setTimeout(scrollToMessage, 200, 'msg1')}} class="user-message"> 
                    <div class="icon red"> 
                        <img class="white-icon" src={icon} alt="icon blanc" />
                    </div>
                    <div class="message red"> 
                        <p>Quand déclarer son chiffre d’affaires  ? </p>
                    </div>
                </div>
                {
                show1 ? 
                    <div id="msg1" class="sens-message"> 
                        <div class="icon blue"> <img src={iconSens} alt='icon-sens'/> </div>
                        <div class="response"> 
                            <div class="message blue">
                                <p>
                                Pour effectuer sa déclaration de chiffre d'affaires, 
                                le micro-entrepreneur a le choix entre une déclaration mensuelle (périodicité de principe) ou trimestrielle (sur demande). 
                                La demande est à effectuer dans le mois suivant le début d'activité. Elle est accompagnée du paiement soit des cotisations sociales seules,
                                soit du prélèvement social et fiscal libératoire.
                                </p>
                            </div>
                            <div class="message blue">
                                <p>
                                    N’hésitez pas à regarder par ici <br/><br/>
                                    <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F23257">https://www.service-public.fr/professionnels-entreprises/vosdroits/F23257</a> 
                                </p>
                            </div>
                        </div>
                    </div> : ''
                }
                <div onClick={() => {setShow2(!show2); setTimeout(scrollToMessage, 200, 'msg2')}} class="user-message"> 
                    <div class="icon red"> 
                        <img class="white-icon" src={icon} alt="icon blanc" />
                    </div>
                    <div class="message red"> 
                        <p>Quelles sont les aides pour la création d’entreprise ? </p>
                    </div>
                </div>
                {
                show2 ? 
                    <div id="msg2" class="sens-message"> 
                        <div class="icon blue"> <img src={iconSens} alt='icon-sens'/> </div>
                        <div class="response"> 
                            <div class="message blue">
                                Il existe de nombreuses aides à la création ou reprise d’entreprise, comme :
                                <p>
                                <br/>
                                    <div class="bold">ARCE :</div> aide financière versée par Pôle emploi correspondant à 45 % du reliquat des droits à l’assurance chômage
                                <br/>
                                    <div class="bold">ACRE :</div> exonération de charges sociales du nouveau chef d'entreprise
                                <br/>
                                    <div class="bold">Prime d’aménagement du territoire</div> pour les projets qui créent au moins 20 emplois sur le territoire
                                <br/>
                                    <div class="bold">Les financements spécifiques </div>pour les projets innovants, 
                                </p>
                            </div>
                            <div class="message blue">
                                <p>
                                    N’hésitez pas à regarder par ici
                                    <br/><br/>
                                    <a href="https://bpifrance-creation.fr/moment-de-vie/aides-a-creation-ou-reprise-dentreprise-comment-identifier">https://bpifrance-creation.fr/moment-de-vie/aides-a-creation-ou-reprise-dentreprise-comment-identifier</a>
                                    <br/><br/>
                                    Psss, les mots en gras sont des liens !
                                </p>
                            </div>
                        </div>
                    </div> : ''
                }
                <div onClick={() => {setShow3(!show3); setTimeout(scrollToMessage, 200, 'msg3')}} class="user-message"> 
                    <div class="icon red">
                        <img class="white-icon" src={icon} alt="icon blanc" />
                    </div>
                    <div class="message red"> Comment choisir son statut ?</div>
                </div>
                {
                show3 ? 
                    <div id="msg3" class="sens-message"> 
                        <div class="icon blue"> <img src={iconSens} alt='icon-sens'/> </div>
                        <div class="response"> 
                            <div class="message blue">
                                <p>
                                    Lors de la création d’une entreprise, il convient de choisir un statut. Ce choix entre les différents statuts d’entreprises est possible est complexe et important car il a un impact sur de multiples paramètres : statut social du dirigeant, fiscalité, règles juridiques applicables.
                                    La première étape est d’identifier qu’elle est le type de la structure : une entreprise individuelle ou une société. En fonction de votre projet d’entreprise, regardez bien quel statut juridique possède le plus d’avantages et présente le minimum de risques pour vous.
                                </p>
                            </div>
                            <div class="message blue">
                                <p>
                                    N’hésitez pas à regarder par ici <br/><br/>
                                    <a href="https://bpifrance-creation.fr/moments-de-vie/comment-choisir-bon-statut-juridique-son-entreprise">https://bpifrance-creation.fr/moments-de-vie/comment-choisir-bon-statut-juridique-son-entreprise</a>
                                </p>
                            </div>
                        </div>
                    </div> : ''
                }
                <div onClick={() => {setShow4(!show4); setTimeout(scrollToMessage, 200, 'msg4')}} class="user-message"> 
                    <div class="icon red"> 
                        <img class="white-icon" src={icon} alt="icon blanc" />
                    </div>
                    <div class="message red"> 
                        <p>Est ce que tout le monde peut devenir entrepreneur ?</p>
                    </div>
                </div>
                {
                show4 ? 
                    <div id="msg4" class="sens-message"> 
                        <div class="icon blue"> <img src={iconSens} alt='icon-sens'/> </div>
                        <div class="response"> 
                            <div class="message blue">
                                <p>
                                    Devenir entrepreneur est ouvert à tous ! 
                                    Que vous soyez demandeur d’emploi, étudiant, salarié, fonctionnaire, profession libérale ou retraité.
                                </p>
                            </div>
                            <div class="message blue">
                                <p>
                                    N’hésitez pas à regarder par ici <br/><br/>
                                    <a href=" https://madame.lefigaro.fr/business/il-est-temps-de-demystifier-lentrepreneur-les-cles-de-la-reussite-dalexandre-mars-120320-180310 "> https://madame.lefigaro.fr/business/il-est-temps-de-demystifier-lentrepreneur-les-cles-de-la-reussite-dalexandre-mars-120320-180310 </a>
                                </p>
                            </div>
                        </div>
                    </div> : ''
                }
            </div>
        </div>
    );
  }
  
export default FAQ;
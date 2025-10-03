import React, { useEffect } from 'react';
import './newsletter.css'


import MailchimpSubscribe from "react-mailchimp-subscribe"

function Newsletter() {
  const url = 'https://gmail.us20.list-manage.com/subscribe/post?u=c05daa522728cf54880040e1c&amp;id=0e01890a0d';
  const SimpleForm = () => < MailchimpSubscribe className="test" url={url} />

  useEffect(() => {
    document.querySelector("input[type='email']").placeholder='Adresse mail';
    document.querySelector("input[type='email']").parentNode.lastChild.textContent="s'inscrire";
  });
  return (
    
    <div id="newsletter" class="newsletter-section">
      <div class="newsletter-container">
        <h2>Abonnez-vous</h2>
        <p> Prenez votre dose de positivité en souscrivant à notre newsletter ! </p>

        <div class="form-section">
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <div className="test" >
                <SimpleForm onSubmitted={formData => subscribe(formData)} />
                {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
              </div>
            )}
          />
        </div>
        </div>
    </div>
  );
}

export default Newsletter;
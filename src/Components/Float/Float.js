import React, {useEffect, useState} from 'react'
import './float.css'
import Faq from '../FAQ/FAQ'



function Float() {

    
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen && document.documentElement.clientWidth < 450) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [isOpen]);

    return (
        <div className={isOpen ? "float-section-open" : 'float-section-close'}>
            {isOpen ? '' : 'FAQ'}
            <div onClick={() => setIsOpen(!isOpen)} className={isOpen ? "button-container" : 'button-container-close'}> 
                <div className={isOpen ? "button-open" : 'button-close'}> </div>
            </div>
            {
            isOpen ? 
                <Faq/> : null
            }
            
        </div>
    );
  }
  
export default Float;
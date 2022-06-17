import React from 'react'

import './cookie-consent.css'

export default function CookieConsent() {

  const handleClick = () => {
    document.querySelector('.cookie-consent-wrapper').style.display = 'none'
  }
  return (
    <div className="cookie-consent-wrapper">
      <div className="cookie-consent-text">
        Au cabinet CAP patrimoine, notre objectif est de vous guider en toute <span className="bold-txt">confiance</span> et en respectant votre <span className="bold-txt">confidentialité</span>. <br/>
         C'est pouquoi nous n'utilisons pas de cookie sur ce site.
      </div>
      <button className="cookie-consent-btn"
      onClick={handleClick}>
        OK
      </button>
    </div>
  )
}

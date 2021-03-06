import React from 'react'
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import logo from '../../assets/logoCapPatrimoine.webp'
import { useDispatch } from 'react-redux'
import { changePage } from '../../redux/changePage'

export default function Footer() {

  const dispatch = useDispatch()

  const handleClick = () => {
    document.querySelector('.legal-notice-wrapper').style.display = 'block'
    setTimeout(() => { document.querySelector('.legal-notice-wrapper').style.opacity = 1 }, 10)
  }

  return (
    <div className='footer'>

      <div className="footer-logo-container" onClick={() => dispatch(changePage(0))}>
        <img className="footer-logo-container-img"
          src={logo}
          alt="cabinet cap patrimoine" />
        <div className="footer-logo-container-name">
          <div>
            Cabinet CAP Patrimoine
          </div>
          <div>
            Conseil en gestion de patrimoine.
          </div>
        </div>
      </div>

      <div className="legal-notice-link"
        onClick={handleClick}>
        Mentions légales
      </div>

      <div className="contact-us"
        onClick={() => dispatch(changePage(4))}>
        Contactez-nous
      </div>

      <div>
        <a href="https://www.maxime-malfilatre.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to webmaster">
          Site crée par Maxime Malfilâtre
        </a>
      </div>

      <div className="social-network">
        <a href="https://www.linkedin.com/in/christophe-vitu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>

    </div>
  )
}

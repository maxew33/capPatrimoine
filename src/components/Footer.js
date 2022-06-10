import React from 'react'
import '../style/footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import logo from '../assets/logo.png'
import { useDispatch } from 'react-redux'
import { changePage } from '../redux/changePage'

export default function Footer() {

  const dispatch = useDispatch()

  const handleClick = () => {
    console.log('legal notice')
    document.querySelector('.legal-notice-wrapper').style.display = 'block'
    setTimeout(() => { document.querySelector('.legal-notice-wrapper').style.opacity = 1 }, 10)
  }

  return (
    <div className='footer'>

      <div className="logo-container">
        <img className="logo-container-img"
          src={logo}
          alt="cabinet cap patrimoine" />
        <div className="logo-container-name">
          Cabinet CAP Patrimoine
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

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import pen from '../../assets/pen.jpg'

import './contact.css'

export default function Contact() {
  return (
    <section>

      <div className="banner banner-contact">
        <img
          className='banner-img'
          src={pen}
          alt="contact" />
        <div className="banner-title">
          Contactez-nous
        </div>

      </div>

      <div className="contact-wrapper page-wrapper">

        <div className="contact contact-direct">
          <div className="contact-direct-title">
            Directement
          </div>
          <div className="contact-direct-container">
            <div className="contact-direct-detail">
              <div className="contact-direct-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-direct-name">
                appelez-nous
              </div>
              <div className="contact-direct-link">
                06-81-76-67-18
              </div>
            </div>

            <div className="contact-direct-detail">
              <div className="contact-direct-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-direct-name">
                écrivez-nous
              </div>
              <div className="contact-direct-link">
                cvconseilgestionpatrimoine<br/>@gmail.com
              </div>
            </div>
            <div className="contact-direct-detail">
              <div className="contact-direct-icon">
                <a href="https://www.linkedin.com/in/christophe-vitu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link to linkedin">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div className="contact-direct-name">
                linkedin
              </div>
              <div className="contact-direct-link">
              </div>
            </div>
          </div>
        </div>

        <div className="contact contact-form">
          <div className="contact-form-title"></div>
          <form action="">
            <div className="contact-form-inputs">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <select name="" id=""></select></div>
            <div className="contact-form-txt-sub">
              <textarea name="" id="" cols="30" rows="10">
              </textarea>
              <button>
                submit
              </button>
            </div>
          </form>
        </div>

      </div>

    </section>
  )
}

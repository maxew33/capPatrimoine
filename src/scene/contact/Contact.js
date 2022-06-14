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
          <div className="contact-title contact-direct-title">
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
                cvconseilgestionpatrimoine<br />@gmail.com
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
          <div className="contact-title contact-form-title">
            ou en complétant le formulaire
          </div>

          <form
            className='contact-form'
            action="">
            <div className="contact-form-inputs">
              <div className="contact-form-input">
                <input id="lastname-input"
                  type="text"
                  name="user-lastname"
                  required />
                <label
                  className="input-txt-label"
                  htmlFor="lastname-input">Nom</label>
              </div>
              <div className="contact-form-input">
                <input id="firstname-input"
                  type="text"
                  name="user-firstname"
                  required />
                <label
                  className="input-txt-label"
                  htmlFor="firstname-input">Prénom</label>
              </div>
              <div className="contact-form-input">
                <input
                  id="email-input"
                  type="email"
                  name="user-email"
                  required />
                <label
                  className="input-txt-label"
                  htmlFor="email-input">email</label>
              </div>

              <select
                className='contact-form-select'
                name=""
                id="">
                <option value="">motif</option>
                <option value="">demande de rendez-vous</option>
                <option value="">audit financier</option>
                <option value="">audit immobilier</option>
                <option value="">autre</option>

              </select>
            </div>

            <div className="contact-form-txt-sub">
              <textarea
                className='contact-form-txt'
                name=""
                id="message-form"
                cols="30"
                rows="10"
                required>
              </textarea>
              <label
                className="input-txt-label"
                htmlFor="message-form">message</label>
              <button className='contact-form-btn'>
                Envoyer
              </button>
            </div>
          </form>
        </div>

      </div>

    </section>
  )
}

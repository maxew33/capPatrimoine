
import { useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import pen from '../../assets/pen.webp'
import logo from '../../assets/logoCapPatrimoine.webp'

import emailjs from '@emailjs/browser'

import './contact.css'

export default function Contact() {

  const form = useRef()
  const success = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.REACT_APP_EMAILKEY_SERVICE_ID,
      process.env.REACT_APP_EMAILKEY_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILKEY_USER_ID)
      .then(() => {
        form.current.reset()
        success.current.style.display = "grid"
        success.current.style.opacity = 1
      }, error => {
        console.error(error.text);
      });
  }

  const handleClick = () => {
    success.current.style.opacity = 0
    setTimeout(() => { success.current.style.display = "none" }, 125)
  }


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
              <a href="mailto:cvconseilgestionpatrimoine@gmail.com"
                className="contact-direct-link">
                cvconseilgestionpatrimoine<br />@gmail.com
              </a>
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
            Ou en complétant le formulaire
          </div>

          <form
            className='contact-form'
            onSubmit={sendEmail}
            ref={form}>

            <div className="contact-form-inputs">
              <div className="contact-form-input">
                <input id="lastname-input"
                  type="text"
                  name="from_lastname"
                  required />
                <label
                  className="input-txt-label"
                  htmlFor="lastname-input">Nom *</label>
              </div>

              <div className="contact-form-input">
                <input id="firstname-input"
                  type="text"
                  name="from_firstname"
                  required />
                <label
                  className="input-txt-label"
                  htmlFor="firstname-input">Prénom *</label>
              </div>

              <div className="contact-form-input">
                <input
                  id="email-input"
                  type="email"
                  name="user_email"
                  required />
                <label
                  className="input-txt-label"
                  htmlFor="email-input">email *</label>
              </div>

              <div className="contact-form-input">
                <input
                  name="user_object"
                  id="object-input"/>
                <label
                  className="input-txt-label"
                  htmlFor="object-input">objet</label>
              </div>
            </div>

            <div className="contact-form-txt-sub">
              <textarea
                className='contact-form-txt'
                name="message"
                id="message-form"
                cols="30"
                rows="10"
                required>
              </textarea>
              <label
                className="input-txt-label"
                htmlFor="message-form">message</label>
              <button type='submit' value='send' className='contact-form-btn'>
                Envoyer
              </button>
            </div>
          </form>
        </div>

        <div className="contact-form-sent"
          ref={success}>
          <div className="contact-form-sent-wrapper">

            <div className="contact-form-sent-message">
              <img className="contact-form-sent-logo"
                src={logo}
                alt="cabinet cap patrimoine" />
              <div>
                Message envoyé.
              </div>
            </div>
            <button
              className='contact-form-sent-button'
              onClick={handleClick}>
              OK
            </button>
          </div>
        </div>

      </div>

    </section>
  )
}

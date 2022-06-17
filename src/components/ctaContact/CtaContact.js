import React from 'react'

import { useDispatch } from 'react-redux'
import { changePage } from '../../redux/changePage'

import './ctaContact.css'

export default function CtaContact() {

  const dispatch = useDispatch()

  return (
    <div className='cta-contact'>
      <div className="tagline">
        Bénéficiez de toute notre objectivité et de notre expertise pour créer, développer, gérer votre patrimoine.
      </div>
      <button className="contact-link-button"
        onClick={() => dispatch(changePage(4))}>
        contactez-nous
      </button>
    </div>
  )
}

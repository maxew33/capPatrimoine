import React from 'react'
import CtaContact from '../../components/CtaContact'

import logo from '../../assets/logo.png'

export default function Partenaires() {
  return (
    <section>

      <div className="banner banner-partners">
        <div className="banner-title">
          Nos Partenaires
        </div>
        <div className="banner-page-descr">
          Videre haec redeundum serium admodum ardore agi mirum plebem serium cum mirum ergo dimicationum textum mirum haec dimicationum memorabile admodum quodam permittunt pendentem plebem mirum nihil serium innumeram infuso serium textum pendentem.
        </div>
      </div>

      <div className="partners-details">
        <div className="partners-detail-container">
          <div className="partners-detail-banner">
            <div className="partners-detail-banner-icon">
              <img src={logo} alt="" />
            </div>
            <div className="partners-detail-banner-title">
              Promoteurs et gestionnaires
            </div>
          </div>
          <div className="partners-detail-carousel"></div>
        </div>

        <div className="partners-detail-container">
          <div className="partners-detail-banner">
            <div className="partners-detail-banner-icon">
              <img src={logo} alt="" />
            </div>
            <div className="partners-detail-banner-title">
              Société de gestion
            </div>
          </div>
          <div className="partners-detail-carousel"></div>
        </div>

        <div className="partners-detail-container">
          <div className="partners-detail-banner">
            <div className="partners-detail-banner-icon">
              <img src={logo} alt="" />
            </div>
            <div className="partners-detail-banner-title">
              Placement et financement
            </div>
          </div>
          <div className="partners-detail-carousel"></div>
        </div>
      </div>

      <CtaContact />

    </section>
  )
}

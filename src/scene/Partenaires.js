import React from 'react'
import CtaContact from '../components/CtaContact'

export default function Partenaires() {
  return (
    <section>

      <div className="banner banner-partners">
        bannière
      </div>

      <div className="partners-details">
        <div className="partners-detail-container">
          <div className="partners-detail-banner">
            <div className="partners-detail-banner-icon"></div>
            <div className="partners-detail-banner-title"></div>
          </div>
          <div className="partners-detail-carousel"></div>
        </div>
        <div className="partners-detail-container">
          <div className="partners-detail-banner">
            <div className="partners-detail-banner-icon"></div>
            <div className="partners-detail-banner-title"></div>
          </div>
          <div className="partners-detail-carousel"></div>
        </div>
        <div className="partners-detail-container">
          <div className="partners-detail-banner">
            <div className="partners-detail-banner-icon"></div>
            <div className="partners-detail-banner-title"></div>
          </div>
          <div className="partners-detail-carousel"></div>
        </div>
      </div>

      <CtaContact />

    </section>
  )
}

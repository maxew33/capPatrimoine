import React from 'react'

import CtaContact from '../../components/CtaContact'

import bordeaux from '../../assets/place-de-la-bourse.jpg'
import chrisVitu from '../../assets/christophe-vitu.png'
import hands from '../../assets/hands.jpg'
import user1 from '../../assets/client-1.jpg'
import user2 from '../../assets/client-2.jpg'
import user3 from '../../assets/client-3.jpg'
import user4 from '../../assets/client-4.jpg'

import './accueil.css'

export default function Accueil() {
  return (
    <section>

      <div className="banner-illus">
        <img src={bordeaux} alt="vue de la place de la bourse" />
        <div className="overlay"></div>
      </div>

      <div className="banner banner-accueil">
        <div className="banner-title">
          Cabinet CAP Patrimoine
        </div>
      </div>


      <div className="accueil-wrapper">
        <div className="banner-tagline">
          Des professionnels de la gestion et du suivi patrimonial à votre écoute.
        </div>

        <div className="presentation">
          <img
          className='id-pic'
            src={chrisVitu}
            alt="christophe vitu" />
          <div className="presentation-detail-container">
            <div className="presentation-detail-text">
              “ Spécialiste en gestion de patrimoine, je suis présent à vos côtés pour vous accompagner dans toutes les phases de vie de votre patrimoine: construction, développement, optimisation, transmission. ”
            </div>
            <div className="presentation-detail-descr">
              <div className="presentation-detail-name">
                Christophe Vitu
              </div>
              <div className="presentation-detail-rank">
                expert au cabinet CAP Patrimoine
              </div>
            </div>
          </div>
        </div>

        <div className="policy">
          <div className="policy-detail-container">
            <div className="policy-detail-title">
              Notre politique
            </div>
            <div className="policy-detail-text">
              Nous intervenons en interprofessionnalité avec vos conseillers habituels : experts comptables, notaires et avocats fiscalistes.
              Cette collaboration apporte un regard croisé et crée une véritable valeur ajoutée.

            </div>
          </div>
          <img src={hands} alt="" />
        </div>

        <CtaContact />

        <div className="user-review">
          <div className="user-container">
            <img src={user1} alt="" />
            <div className="user-notice-container">
              <div className="user-notice">
                Sérieux, efficace, à l’écoute, professionnel.
              </div>
              <div className="user-name">
                M. B M
              </div>
            </div>
          </div>
          <div className="user-container">
            <img src={user2} alt="" />
            <div className="user-notice-container">
              <div className="user-notice">
                Très bon professionnel !
              </div>
              <div className="user-name">
                M. Mme L
              </div>
            </div>
          </div>
          <div className="user-container">
            <img src={user3} alt="" />
            <div className="user-notice-container">
              <div className="user-notice">
                Compétences, écoute, amabilité, efficacité.
              </div>
              <div className="user-name">
                MMe M M
              </div>
            </div>
          </div>
          <div className="user-container">
            <img src={user4} alt="" />
            <div className="user-notice-container">
              <div className="user-notice">
                La recherche de mes besoins et les solutions proposées sont très pertinentes.
              </div>
              <div className="user-name">
                M. T
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

import React from 'react'
import CtaContact from '../../components/ctaContact/CtaContact'

import attente from '../../assets/questions.webp'
import reponses from '../../assets/advising.webp'
import accompagnement from '../../assets/working-process.webp'
import expertise from '../../assets/raising-graph.webp'

import './cabinet.css'

export default function Cabinet() {
  return (
    <section>

      <div className="banner banner-cabinet">
        <div className="banner-title">
          Cabinet Cap Patrimoine
        </div>
        <div className="banner-page-descr">
          Fort de 18 années d’expériences dans le domaine bancaire (notamment en banque privée) et dans les assurances, notre équipe reste en veille sur les nouveautés fiscales, économiques et juridiques pour toujours mieux vous accompagner.
        </div>
      </div>

      <div className="cabinet-wrapper page-wrapper">

        <div className="characteristics">
          <img
            className="characteristics-img"
            src={attente}
            alt="vos attentes" />

          <div className="characteristics-title">
            Vos attentes
          </div>

          <div className="characteristics-text paragraph-content-text">
            Tout d’abord nous faisons un audit complet de votre situation et de vos besoins, puis dans un second temps restitution des préconisations, enfin nous rechercherons des solutions auprès de nos partenaires pour un accompagnement dans leurs mises en place.
          </div>
        </div>

        <div className="characteristics">

          <img
            className="characteristics-img"
            src={reponses}
            alt="nos réponses" />

          <div className="characteristics-title">
            Nos réponses
          </div>

          <div className="characteristics-text paragraph-content-text">
            Pour mieux répondre à vos attentes, nous allons chercher les solutions avec toute la largeur et la profondeur qui existent sur le marché, en toute objectivité, transparence et indépendance grâce à mes nombreux partenaires financiers, immobiliers et société de gestion.
          </div>

        </div>

        <div className="characteristics">

          <img
            className="characteristics-img"
            src={accompagnement}
            alt="notre accompagnement" />

          <div className="characteristics-title">
            Notre accompagnement
          </div>

          <div className="characteristics-text paragraph-content-text">
            Au cabinet Cap Patrimoine, vous aurez un interlocuteur unique qui s’engagera à vous accompagner dans le temps pour des solutions optimisées et personnalisées.
          </div>

        </div>

        <div className="characteristics">

          <img
            className="characteristics-img"
            src={expertise}
            alt="notre expertise" />

          <div className="characteristics-title">
            Notre expertise
          </div>

          <div className="characteristics-text paragraph-content-text">
            Activer les leviers<br />
            Utiliser les outils juridiques et fiscaux<br />
            Optimiser de la fiscalité<br />
            Préparer retraite<br />
            Anticiper les transmissions dans les meilleures conditions<br />
            Optimiser la rémunération du dirigeant<br />
            Financer au mieux les projets<br />
            Sécuriser les proches et le patrimoine<br />
          </div>

        </div>

        <CtaContact />

      </div>


    </section >
  )
}

import React from 'react'

import CtaContact from '../components/CtaContact'

import bordeaux from '../assets/place-de-la-bourse'
import chrisVitu from '../assets/christophe-vitu'
import hands from '../assets/hands'
import user1 from '../assets/client-1'
import user2 from '../assets/client-2'
import user3 from '../assets/client-3'
import user4 from '../assets/client-4'

export default function Accueil() {
  return (
    <section>
      <div className="banner banner-accueil">
bannière
      </div>

      <div className="presentation">
présentation
      </div>

      <div className="policy">
notre politiques
      </div>
      
      <CtaContact/>

      <div className="user-review">
avis utilisateur
      </div>
      
    </section>
  )
}

import './App.css';

import Accueil from './scene/accueil/Accueil'
import Cabinet from './scene/cabinet/Cabinet'
import Solutions from './scene/solutions/Solutions'
import Partenaires from './scene/partenaires/Partenaires'
import Contact from './scene/contact/Contact'
import MentionsLegales from './scene/mentionsLegales/MentionsLegales'
import TransitionSlide from './components/TransitionSlide';

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import useWindowSize from './utils/useWindowSize'

function App() {

  const pageRank = useSelector(state => state.myPage.pageRank)

  const [orientation, setOrientation] = useState('landscape')

  const size = useWindowSize()

  const pages = [
    { name: 'Accueil', link: <Accueil /> },
    { name: 'Cabinet', link: <Cabinet /> },
    { name: 'Solutions', link: <Solutions /> },
    { name: 'Partenaires', link: <Partenaires /> },
    { name: 'Contact', link: <Contact /> }
  ]

  useEffect(() => {
    fastScrollToTop()
  }, [pageRank])

  useEffect(() => {
    console.log(`
 _                       
|_)  _   _  o  _       _ 
|_) (_) | | | (_) |_| |  
           _|            
      \\_________/
    
`)

    size.height < size.width ? setOrientation('landscape') : setOrientation('portrait')
    console.log(size.height)

  }, [])


  useEffect(() => {
    // effect triggered when changing viewport size
    size.height < size.width ? setOrientation('landscape') : setOrientation('portrait')
  }, [size])

  const fastScrollToTop = () => {
    console.log('scroll to top')
    document.documentElement.scrollTo(0, 0)
  }

  return (
    <div className="App">

      {/* <TransitionSlide/> */}

      <Header pages={pages} />

      {pages[pageRank].link}

      <ScrollToTop size={size} />

      <MentionsLegales />

      <Footer />

    </div>
  );
}

export default App;

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

import { useSelector} from 'react-redux'

function App() {

  const pageRank = useSelector(state => state.myPage.pageRank)

  const pages = [
    { name: 'accueil', link: <Accueil /> },
    { name: 'cabinet', link: <Cabinet /> },
    { name: 'solutions', link: <Solutions /> },
    { name: 'partenaires', link: <Partenaires /> },
    { name: 'contact', link: <Contact /> }
  ]

  return (
    <div className="App">

      {/* <TransitionSlide/> */}

      <Header pages={pages} />

      {pages[pageRank].link}

      <MentionsLegales/>

      <Footer />

    </div>
  );
}

export default App;

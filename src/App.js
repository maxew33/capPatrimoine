import './App.css';

import Accueil from './scene/Accueil'
import Cabinet from './scene/Cabinet'
import Solutions from './scene/Solutions'
import Partenaires from './scene/Partenaires'
import Contact from './scene/Contact'
import MentionsLegales from './scene/MentionsLegales'

import Header from './components/Header'

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

      <Header pages={pages} />

      {pages[pageRank].link}

      

    </div>
  );
}

export default App;

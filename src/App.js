import css from './App.module.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import { Routes, Route } from "react-router"
import GameGridContainer from './Components/GameGrid/GameGridContainer';
import RacesPageContainer from './Components/RacesPage/RacesPageContainer';
import PlayersContainer from './Components/Players/PlayersContainer';
import LoginFormContainer from './Components/Login/LoginPage/LoginFormContainer';

const App = (props) => {
  return (
    <div className={css.App}>
      <header className={css.header}>
        <Header />
      </header>
      <nav className={css.nav}>
        <Navigation />
      </nav>
      <main className={css.main}>
        <Routes>
          <Route path="/game" element={<GameGridContainer />} />
          <Route path="/race/:raceId?" element={<RacesPageContainer />} />
          <Route path="/players" element={<PlayersContainer/> } />
          <Route path="/login" element={<LoginFormContainer/> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;

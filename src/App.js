import css from './App.module.css';
import Header from './Components/Header/Header';
import GameGrid from './Components/GameGrid/GameGrid';
import Navigation from './Components/Navigation/Navigation';
import { Routes, Route } from "react-router"
import RacesPage from './Components/RacesPage/RacesPage';

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
          <Route path="/game" element={<GameGrid />} />
          <Route path="/race/*" element=
            {
              <RacesPage races={props.appState.races} 
                        editedRace = {props.appState.newRace} 
                        racesActor={props.appActor.racesActor} />
            } />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import css from './App.module.css';
import Header from './Components/Header/Header';
import GameGrid from './Components/GameGrid/GameGrid';
import Navigation from './Components/Navigation/Navigation';
import { Routes, Route } from "react-router"
import RacesPage from './Components/RacesPage/RacesPage';

const App = (props) => {
  debugger
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
          <Route path="/game" element={
            <GameGrid gameState={props.state.gameState} 
              dispatch={props.store.dispatch.bind(props.store)}/>
            } />
          <Route path="/race/*" element=
            {
              <RacesPage races={props.state.raceState.races}
                preCreatedRaceName={props.state.raceState.preCreatedRaceName}
                editedRace={props.state.raceState.newRace}
                dispatch={props.store.dispatch.bind(props.store)} />
            } />
        </Routes>
      </main>
    </div>
  );
}

export default App;

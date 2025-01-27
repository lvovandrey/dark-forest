import css from './App.module.css';
import Header from './Components/Header/Header';
import GameGrid from './Components/GameGrid/GameGrid';
import Navigation from './Components/Navigation/Navigation';
import RaceEditor from "./Components/RaceEditor/RaceEditor";
import { Routes, BrowserRouter, Route } from "react-router"
import RacesPage from './Components/RacesPage/RacesPage';

const App = (props) => {
  return (
    <BrowserRouter>
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
            <Route  path="/race/*" element={<RacesPage races = {props.appState.races}/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

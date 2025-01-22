import css from './App.module.css';
import Header from './Components/Header/Header';
import GameGrid from './Components/GameGrid/GameGrid';
import Navigation from './Components/Navigation/Navigation';

const App = () => {
  return (
    <div className={css.App}>
      <Header />
      <Navigation />
      <GameGrid />
    </div>
  );
}

export default App;

import './App.css';
import Header from './Components/Header/Header';
import GameGrid from './Components/GameGrid/GameGrid';
import Navigation from './Components/Navigation/Navigation';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <GameGrid/>
    </div>
  );
}

export default App;

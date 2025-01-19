import './App.css';
import Header from './Components/Header/Header';
import MainGrid from './Components/MainGrid/MainGrid';
import Navigation from './Components/Navigation/Navigation';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <MainGrid/>
    </div>
  );
}

export default App;

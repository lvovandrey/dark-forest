import css from './App.module.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import { Routes, Route } from "react-router"
import GameGridContainer from './Components/GameGrid/GameGridContainer';
import RacesPageContainer from './Components/RacesPage/RacesPageContainer';
import PlayersContainer from './Components/Players/PlayersContainer';
import LoginFormContainer from './Components/Login/LoginPage/LoginFormContainer';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeAppTC } from './redux/appReducer';
import { Preloader } from './Components/Common/Preloader/Preloader';
import { getIsInitializedSL } from './redux/selectors/appSelectors';

class AppComponent extends Component {

  componentDidMount() {
    this.props.initializeAppTC()
  }

  render() {

    if (!this.props.isInitialized)
      return (
        <div>
          <Preloader isFetching={!this.props.isInitialized} />
        </div>
      )

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
            <Route path="/players" element={<PlayersContainer />} />
            <Route path="/login" element={<LoginFormContainer />} />
          </Routes>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitialized: getIsInitializedSL(state)
})

const App = connect(mapStateToProps, { initializeAppTC })(AppComponent)

export default App;

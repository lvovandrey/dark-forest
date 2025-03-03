import { connect } from 'react-redux';
import RacesPage from './RacesPage';

const mapStateToProps = (state) => {
    return {
        racesState: state.raceState
    }
}

const RacesPageContainer = connect(mapStateToProps, {})(RacesPage)

export default RacesPageContainer
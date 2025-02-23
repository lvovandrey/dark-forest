import { connect } from 'react-redux';
import RacesPage from './RacesPage';

const mapStateToProps = (state) => {
    return {
        racesState: state.raceState
    }
}

const mapDispatchToProps = (dispatch) => {return {}}

const RacesPageContainer = connect(mapStateToProps, mapDispatchToProps)(RacesPage)

export default RacesPageContainer
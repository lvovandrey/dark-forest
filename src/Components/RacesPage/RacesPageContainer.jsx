import { connect } from 'react-redux';
import RacesPage from './RacesPage';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        racesState: state.raceState,
    }
}

const RacesPageContainer =    
    compose(
        connect(mapStateToProps, {}), 
        withAuthRedirect
    )(RacesPage)

export default RacesPageContainer
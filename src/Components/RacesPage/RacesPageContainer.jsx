import { connect } from 'react-redux';
import RacesPage from './RacesPage';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const AuthRedirectComponent = withAuthRedirect(RacesPage)

const mapStateToProps = (state) => {
    return {
        racesState: state.raceState,
        isAuth: state.authState.isAuth
    }
}

const RacesPageContainer = connect(mapStateToProps, {})(AuthRedirectComponent)

export default RacesPageContainer
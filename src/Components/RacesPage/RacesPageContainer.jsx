import { connect } from 'react-redux';
import RacesPage from './RacesPage';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getRacesStateSL } from '../../redux/selectors/racesSelectors';

const mapStateToProps = (state) => {
    return {
        racesState: getRacesStateSL(state),
    }
}

const RacesPageContainer =    
    compose(
        connect(mapStateToProps, {}), 
        withAuthRedirect
    )(RacesPage)

export default RacesPageContainer
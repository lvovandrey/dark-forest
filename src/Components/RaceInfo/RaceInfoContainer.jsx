import RaceInfo from "./RaceInfo"
import { connect } from 'react-redux';
import React from "react";
import { useParams } from "react-router";
import { getRaceToEditTC } from "../../redux/racesReducer";
import { getEditedRaceSL } from "../../redux/selectors/racesSelectors";
import { getTokenSL } from "../../redux/selectors/authSelectors";

class RaceInfoAPIContainer extends React.Component {

    loadRace = () => {
            this.props.getRaceToEditTC(this.props.params.raceId)
    }

    componentDidMount() {
        this.loadRace()
    }
    
    componentDidUpdate(){
        if(this.props.race.id != -1 && this.props.race.id != this.props.params.raceId)
        {
            this.loadRace()
        }
    }

    render() {
        return <>
        <div>
            <h1>{this.props.params.raceId}</h1>
            <RaceInfo race={this.props.race}
                jwt = {this.props.jwt} />
        </div>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        race: getEditedRaceSL(state),
        jwt: getTokenSL(state)
    }
}


const RaceInfoUseParams = (props) => {
    const params = useParams()
    return <RaceInfoAPIContainer {...props} params={params} />
}

const RaceInfoContainer = connect(mapStateToProps, {getRaceToEditTC})(RaceInfoUseParams)

export default RaceInfoContainer
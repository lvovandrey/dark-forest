import RaceEditor from "./RaceEditor"
import { connect } from 'react-redux';
import React from "react";
import { useParams } from "react-router";
import { addRace, getRaceToEditTC, onChangeNewRace, setRaceEdited, updateRace } from "../../redux/racesReducer";
import { getEditedRaceSL } from "../../redux/selectors/racesSelectors";
import { getTokenSL } from "../../redux/selectors/authSelectors";

class RaceEditorAPIContainer extends React.Component {

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
            <RaceEditor race={this.props.race}
                jwt = {this.props.jwt}
                updateRace={this.props.updateRace}
                addRace={this.props.addRace}
                changeRaceParameter={this.props.changeRaceParameter} />

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


const RaceEditorUseParams = (props) => {
    const params = useParams()
    return <RaceEditorAPIContainer {...props} params={params} />
}

const RaceEditorContainer = connect(mapStateToProps, {
    updateRace,
    addRace,
    changeRaceParameter: onChangeNewRace,
    setRaceEdited,
    getRaceToEditTC
})(RaceEditorUseParams)

export default RaceEditorContainer
import RaceEditor from "./RaceEditor"
import { connect } from 'react-redux';
import React from "react";
import { useParams } from "react-router";
import { addRace, getRaceToEditTC, onChangeNewRace, setRaceEdited, updateRace } from "../../redux/racesReducer";

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
                saveRace={this.props.saveRace}
                createRace={this.props.createRace}
                changeRaceParameter={this.props.changeRaceParameter} />

        </div>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        race: state.raceState.newRace,
        jwt: state.authState.token
    }
}


const RaceEditorUseParams = (props) => {
    const params = useParams()
    return <RaceEditorAPIContainer {...props} params={params} />
}

const RaceEditorContainer = connect(mapStateToProps, {
    saveRace: updateRace,
    createRace: addRace,
    changeRaceParameter: onChangeNewRace,
    setRaceEdited,
    getRaceToEditTC
})(RaceEditorUseParams)

export default RaceEditorContainer
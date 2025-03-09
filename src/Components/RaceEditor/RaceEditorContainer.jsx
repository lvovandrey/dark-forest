import { addRace, onChangeNewRace, setRaceEdited, updateRace } from "../../redux/actionCreators"
import RaceEditor from "./RaceEditor"
import { connect } from 'react-redux';
import React from "react";
import axios from "axios";
import { useParams } from "react-router";

class RaceEditorAPIContainer extends React.Component {

    loadRace = () => {
        debugger
            axios.get(`http://localhost:8089/races/${this.props.params.raceId}`).then((response) => {
                this.props.setRaceEdited(response.data)
            }).catch((error) => {
                console.log(error.message)
            });
    }

    componentDidMount() {
        this.loadRace()
    }
    
    componentDidUpdate(){
        debugger
        console.log("componentDidUpdate()");
        if(this.props.race.id != -1 && this.props.race.id != this.props.params.raceId)
        {
            this.loadRace()
        }
    }

    render() {
        debugger
        return <>
        <div>
            <h1>{this.props.params.raceId}</h1>
            <RaceEditor race={this.props.race}
                saveRace={this.props.saveRace}
                createRace={this.props.createRace}
                changeRaceParameter={this.props.changeRaceParameter} />

        </div>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        race: state.raceState.newRace
    }
}


const RaceEditorUseParams = (props) => {
    const params = useParams()
    debugger
    return <RaceEditorAPIContainer {...props} params={params} />
}

const RaceEditorContainer = connect(mapStateToProps, {
    saveRace: updateRace,
    createRace: addRace,
    changeRaceParameter: onChangeNewRace,
    setRaceEdited
})(RaceEditorUseParams)

export default RaceEditorContainer
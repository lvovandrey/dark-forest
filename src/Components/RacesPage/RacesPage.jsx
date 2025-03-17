import { Button } from 'antd';
import RaceEditorContainer from '../RaceEditor/RaceEditorContainer';
import RaceInfoContainer from '../RaceInfo/RaceInfoContainer';
import RacesListContainer from '../RaceList/RaceListContainer';
import css from './RacesPage.module.css'
import React from 'react';

class RacesPage extends React.Component {

    state = {
        editMode: false
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleEditMode} >{this.state.editMode ? 'Info' : 'Edit'}</button>
                <div className={css.racesPage}>
                    <RacesListContainer />
                    {this.state.editMode ? <RaceEditorContainer /> : <RaceInfoContainer />}
                </div>
            </div>
        )
    }
}

export default RacesPage;
import RaceEditorContainer from '../RaceEditor/RaceEditorContainer';
import RaceInfoContainer from '../RaceInfo/RaceInfoContainer';
import RacesListContainer from '../RaceList/RaceListContainer';
import css from './RacesPage.module.css'
import React, { useState } from 'react';

const RacesPage = (props) => {
    let [editMode, setEditMode] = useState(false);

    let toggleEditMode = () => {
        setEditMode(!editMode);
    }

        return (
            <div>
                <button onClick={toggleEditMode} >{editMode ? 'Info' : 'Edit'}</button> 
                <div className={css.racesPage}>
                    <RacesListContainer />
                    {editMode ? <RaceEditorContainer /> : <RaceInfoContainer />}
                </div>
            </div>
        )
}

export default RacesPage;
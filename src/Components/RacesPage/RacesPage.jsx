import RaceEditorContainer from '../RaceEditor/RaceEditorContainer';
import RacesListContainer from '../RaceList/RaceListContainer';
import css from './RacesPage.module.css'

const RacesPage = () => {
    return (
        <div className={css.racesPage}>
            <RacesListContainer  />
            <RaceEditorContainer />
        </div>
    )
}

export default RacesPage;
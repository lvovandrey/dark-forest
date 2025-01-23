import RaceEditor from '../RaceEditor/RaceEditor';
import RaceInfo from '../RaceInfo/RaceInfo';
import RacesList from '../RacesList/RacesList';
import css from './RacesPage.module.css'

const RacesPage = () => {
    return (
        <div className={css.racesPage}>
            <RacesList/>
            <RaceInfo/>
            <RaceEditor/>
        </div>
    )
}

export default RacesPage;
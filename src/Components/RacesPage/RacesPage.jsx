import RaceEditor from '../RaceEditor/RaceEditor';
import RaceInfo from '../RaceInfo/RaceInfo';
import RacesList from '../RaceList/RacesList';
import css from './RacesPage.module.css'

const RacesPage = () => {

    let meklarInfo = {
        name: 'Меклар',
        health: 15,
        streight: 17,
        description: 'Раса меклар — это кибернеты, полностью отказавшиеся от органической части своих тел. Пища им не нужна, поскольку энергией они снабжаются посредством реакторов с топливом из антиматерии. Политический строй — диктатура: каждый следующий диктатор выбирается после смерти предыдущего, путем оценки IQ всех граждан.'
    } 

    return (
        <div className={css.racesPage}>
            <RacesList/>
            <RaceInfo race={meklarInfo} />
            <RaceEditor race={meklarInfo}/>
        </div>
    )
}

export default RacesPage;
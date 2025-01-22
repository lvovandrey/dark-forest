import css from './PlayerCard.module.css';

const PlayerCard = (props) => {
    return (
        <div className={`${css.player_card} ${css.active}`} >
            <div className={css.streight}>
                {props.streight}
            </div>
            <div className={css.health}>
                {props.health}
            </div>
            <div className={css.card_title}>
                {props.race}
            </div>
        </div>
    )
}

export default PlayerCard
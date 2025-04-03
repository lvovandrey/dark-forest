import { connect } from 'react-redux';
import GameGrid from './GameGrid';
import { gameNextStep } from '../../redux/gameReducer';
import { getGameStateWithPlayersSL } from '../../redux/selectors/gameSelectors';

const mapStateToProps = (state) => getGameStateWithPlayersSL(state)

const GameGridContainer = connect(mapStateToProps, { gameNextStep })(GameGrid)

export default GameGridContainer
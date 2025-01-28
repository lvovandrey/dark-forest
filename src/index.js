import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { addRace, updateRace } from './redux/state.js';
import { rerender } from './render.js';

rerender(state, addRace, updateRace)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

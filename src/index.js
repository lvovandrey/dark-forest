import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state.js';
import actor from './redux/actor.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let render = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} appActor={actor} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

render()

actor.globalActor.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

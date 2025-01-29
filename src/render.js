import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerender = (state, actor) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} appActor={actor} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

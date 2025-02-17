import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.js';
import store from './redux/store.js';

window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));


export let render = () => {
    console.log("render")
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} state={store.getState()} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

store.subscribeOnStateChangingCallback(render)

render()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { Provider } from 'react-redux';
import './assets/styles/index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import { store } from './store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

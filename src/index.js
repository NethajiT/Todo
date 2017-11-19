import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './index.css';
import App from './Components/App';
import reducer from './Reducers'

const store=createStore(reducer);
render(
    <Provider store={store}>
    <App />
    </Provider>
, document.getElementById('root'));


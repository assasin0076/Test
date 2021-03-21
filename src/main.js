import './assets/main.scss';
import React from 'react';
import ReactDom from 'react-dom'
import Validate from './components/Validate';
import RenderValidates from './components/RenderValidates.js'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Form from './components/Validate.js'
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);


document.addEventListener('DOMContentLoaded', function(){
    
    ReactDom.render(
        <>
            <Provider store={createStoreWithMiddleware(reducers)}>
                <RenderValidates />
            </Provider>
        </>,
        document.querySelector('#root')
    )
})




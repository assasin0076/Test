import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

const validates = handleActions({
    [actions.doValidate](state = [], payload) {
        return state;
    }
}, {
    tree: [
        { id: 1, inner:{ text: 'Первейший комп' }, children: [
            { id: 2, inner:{ text: 'Сына первого' }, children: []},
            { id: 3, inner:{ text: 'Второй сына первого' }, children: [
                { id: 4, inner:{ text: 'Сына второго сына первого' }, children: [
                    { id: 6, inner:{ text: 'Сына первого сына второго сына первого' }, children: [
                        { id: 7, inner:{ text: 'Сына первого сына первого сына второго сына первого' }, children: [] },
                    ]}
                ]},
                { id: 8, inner:{ text: 'Второй сына второго сына первого' }, children: []}
            ]},
            { id: 5, inner:{ text: 'Третий сына первого' }, children: [] },
        ] }
    ],
});

const rootReducer = combineReducers({
    validates,
});

export default rootReducer;
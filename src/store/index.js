import { createStore } from 'redux';

let countId = 0;

const defaultState = [
    {
        id: countId++,
        text: 'Помыть кота',
        status: true,
    },
];

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const CHANGE_DONE = 'CHANGE_DONE';

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: countId++,
                    text: action.payload,
                    status: false,
                },
            ];
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        case CHANGE_DONE:
            return state.map((el) =>
                el.id === action.payload ? ((el.status = !el.status), el) : el
            );
        default:
            return state;
    }
};

export const addTodoAction = (payload) => ({ type: ADD_TODO, payload });
export const deleteTodoAction = (payload) => ({ type: DELETE_TODO, payload });
export const changeDoneAction = (payload) => ({ type: CHANGE_DONE, payload });

export const store = createStore(todoReducer);

import {COMPLETE_TODO, CREATE_TODO, REMOVE_TODO} from './action'

export const todos = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isComplete: false
            }
            return state.concat(newTodo);
        };
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        };
        case COMPLETE_TODO: {
            console.log('press')
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    todo.isComplete = true;
                }
                return todo
            })
        }
        default: return state;
    }
}
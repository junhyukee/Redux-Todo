export const initialState = {
    todo: [{ text: 'test', completed: false, id: 0 }, { text: 'testingz', completed: false, id: 1 }],
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todo: [...state.todo, action.payload]
            };
        default:
            return state;
    }
}
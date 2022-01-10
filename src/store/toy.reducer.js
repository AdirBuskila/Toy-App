    const initialState = {
        toys: []
}

export function toyReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_TOYS':
            newState = { ...state, toys: [...action.toys] }
            break;
        case 'ADD_TOY':
            newState = { ...state, toys: [...state.toys, action.toy] }
            break;
        case 'REMOVE_TOY':
            newState = { ...state, toys: state.toys.filter(toy => toy._id !== action.toyId) }
            break;
        case 'UPDATE_TOY':
            newState = {
                ...state, toys: state.toys.map(currToy => {
                    return (currToy._id === action.toy._id) ? action.toy : currToy
                })
            }
        default:
    }
    return newState;
}

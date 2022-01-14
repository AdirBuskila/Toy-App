const initialState = {
    filterBy: {
        name: '',
        inStock: 'All'
    },
    toys: [],
    selectedToy: null
}

export function userReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_TOYS':
            newState = { ...state, toys: [...action.toys] }
            break;
        case 'ADD_TOY':
            newState = { ...state, toys: [...state.toys, action.toy] }
            console.log('newState',newState)
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
        case 'SET_EDIT_TOY':
            newState = { ...state, selectedToy: action.toy }
            break;
        case 'SET_FILTER':
            newState = { ...state, filterBy: action.filterBy }
            break;
        default:
    }
    return newState;
}

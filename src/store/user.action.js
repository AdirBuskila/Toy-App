
import { toyService } from "../services/toy.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function loadToys() {
    return async (dispatch, getState) => {
        try {
            const {filterBy} = getState().toyModule
            const toys = await toyService.query(filterBy)
            const action = { type: 'SET_TOYS', toys };
            dispatch(action) 
        } catch (err) {
            console.log('cant brings toys',err);
        }
    };
}
export function removeToy(toyId) {
    return async (dispatch) => {
        try {
            const removedToy = await toyService.remove(toyId)
            console.log('Deleted Succesfully!');
            dispatch({ type: 'REMOVE_TOY', toyId })
            showSuccessMsg('Toy removed')
        } catch (err) {
            console.log('cannot delete toy',err);
        }
    }
}

export function addToy(toy) {
    return async (dispatch) => {
        try {
            const savedToy = await toyService.add(toy)
            const action = { type: 'ADD_TOY', toy: savedToy }
            dispatch(action)
            showSuccessMsg('Toy added')
        } catch(err) {
            console.log('cannot save toy',err);
        }
    }
}

export function updateToy(toy) {
    return async (dispatch) => {
        try {
            const savedToy = await toyService.save(toy)
            dispatch({ type: 'UPDATE_Toy', toy: savedToy })
            showSuccessMsg('Toy updated')
        } catch (err) {
            console.log('cannot save toy',err);
        }
    }
}


export function setFilterByStore(filterBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_FILTER', filterBy })
        try {
            const toys = await toyService.query(filterBy)
            dispatch({ type: 'SET_TOYS', toys })
        } catch (err) {
            console.log('cannot update filter',err);
        }
    }
}
export function loadToysStats() {
    return async (dispatch, getState) => {
        try {
            const  filterBy = {name:'', inStock: 'All'}
            const toys = await toyService.query(filterBy)
            const action = { type: 'SET_TOYS', toys };
            dispatch(action)
        } catch (err) {
            console.log('cannot load toys',err);
        }
    }
}
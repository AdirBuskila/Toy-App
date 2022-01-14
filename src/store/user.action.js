import { userService } from '../services/user.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'


export function login(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            const action = { type: 'SET_USER', user }
            dispatch(action)
            showSuccessMsg('Loggein')
        } catch (err) {
            showErrorMsg('Cannot signup')
        }

    }
}
export function signup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            const action = { type: 'SET_USER', user }
            dispatch(action)
            showSuccessMsg('Signed up')
        } catch (err) {
            showErrorMsg('Cannot signup')
        }
    }
}
export function logout() {
    return async (dispatch) => {
        try {
            const loggedOut = await userService.logout()
            const action = { type: 'SET_USER', user: null }
            dispatch(action)
            showSuccessMsg('Logged out')
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }
}

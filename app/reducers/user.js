import {GET_USER} from 'actions/user'

export default function userReducer(state = {name: ''}, action) {
    switch (action.type) {
    case GET_USER:
        return {name: action.json.name}

    default:
        return state
    }
}

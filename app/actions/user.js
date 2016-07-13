import fetch from 'isomorphic-fetch'

export const GET_USER = 'GET_USER'

export function getUser(id) {
    return dispatch => {
        const url = `http://jsonplaceholder.typicode.com/users/${id}`

        fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveUser(json)))
    }
}

function receiveUser(json) {
    return {
        type: GET_USER,
        json
    }
}

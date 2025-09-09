import { PENDING_REQUEST, FULFILLED_REQUEST, REJECTED_REQUEST } from "./actionType.js"
import axios from "axios"




function loading_request() {
    return {
        type: PENDING_REQUEST
    }
}


function fulfilled_request(payload) {
    return {
        type: FULFILLED_REQUEST,
        payload
    }
}

function rejected_request(payload) {
    return {
        type: REJECTED_REQUEST,
        payload

    }
}



// export { rejected_request, fulfilled_request, loading_request }




export function fetchData(d) {

    return async (dispatch) => {
        dispatch(loading_request())


        try {
            let response = axios(`http://www.omdbapi.com/?s=${d}&apikey=bf0bf0ef`)

            dispatch(fulfilled_request((await response).data))


        } catch (error) {
            dispatch(rejected_request(error.message))
        }

    }
}


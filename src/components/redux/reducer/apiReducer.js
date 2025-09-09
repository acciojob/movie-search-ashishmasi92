import { PENDING_REQUEST, FULFILLED_REQUEST, REJECTED_REQUEST } from "../action/actionType.js";


let initailState = {
    loading: false,
    data: [],
    error: ""
}




function apiReducer(state = initailState, action) {

    switch (action.type) {

        case PENDING_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FULFILLED_REQUEST:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""

            }
        case REJECTED_REQUEST:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
    }


}



export default apiReducer
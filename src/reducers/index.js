import { SHOW_PUNCHLINE, FETCH_JOKE, FETCH_JOKE_ERROR, FETCH_JOKE_SUCCESS } from "../actions";

const initialState = {
    setup:"Did you hear about the hungry clock?",
    punchline:"It went back four seconds.",
    id: 64,
    showingPunchline: false,
    isFetching: false,
    error: "Error"
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_JOKE: 
            return {
                ...state
            }
        case FETCH_JOKE_SUCCESS:
            return {
                ...state,
                setup: action.payload.setup,
                punchline: action.payload.punchline,
                id: action.payload.id
            }
        case SHOW_PUNCHLINE:
            return {
                ...state,
                showingPunchline: action.payload,
            }
        default:
            return state;
    }
}
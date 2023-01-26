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
        case SHOW_PUNCHLINE:
            return {
                ...state,
                showingPunchline: true,
            }
        default:
            return state;
    }
}
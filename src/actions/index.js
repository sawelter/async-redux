import axios from "axios"


export const FETCH_JOKE = "FETCH_JOKE"
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS"
export const FETCH_JOKE_ERROR = "FETCH_JOKE_ERROR"
export const SET_IS_FETCHING = "SET_IS_FETCHING"
export const SHOW_PUNCHLINE = "SHOW_PUNCHLINE"



export const fetchJoke = () => dispatch => {
    axios.get("https://official-joke-api.appspot.com/random_joke")
        .then(res => {
            console.log(res.data);
            dispatch(fetchJokeSuccess(res.data));
            dispatch(showPunchline(false));
        })
        .catch(err => console.err(error))

    return {type:FETCH_JOKE}
}

export const fetchJokeSuccess = (joke) => {
    return {type:FETCH_JOKE_SUCCESS, payload:joke}
}

export const fetchJokeError = () => {
    return {type:FETCH_JOKE_ERROR}
}

export const showPunchline = (showingPunchline) => {
    return {type:SHOW_PUNCHLINE, payload: showingPunchline}
}

export const setIsFetching = () =>  {
    return {type: SET_IS_FETCHING}
}
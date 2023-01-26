import axios from "axios"


export const FETCH_JOKE = "FETCH_JOKE"
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS"
export const FETCH_JOKE_ERROR = "FETCH_JOKE_ERROR"
export const SHOW_PUNCHLINE = "SHOW_PUNCHLINE"



export const fetchJoke = () => dispatch => {
    return {type:FETCH_JOKE}
}

export const fetchJokeSuccess = () => {
    return {type:FETCH_JOKE_SUCCESS}
}

export const fetchJokeError = () => {
    return {type:FETCH_JOKE_ERROR}
}

export const showPunchline = () => {
    return {type:SHOW_PUNCHLINE}
}
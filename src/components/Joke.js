import React from "react";
import { connect } from "react-redux";
import { showPunchline, fetchJoke, fetchJokeError, fetchJokeSuccess } from "../actions"



const Joke = (props) => {

    if (props.isFetching) {
        return <h2>Fetching a joke!</h2>;
    }

    return (
        <div className="joke-app" id={1}>
            <div className="dynamic-joke">
                <div className="joke">
                    <div className="setup">{props.setup}</div>
                    <div className="punchline">{props.showingPunchline ? props.punchline : ""}</div>
                </div>
                <button onClick={() => props.showPunchline(true)}>Show punchline</button>
            </div>
            <button onClick={() => props.fetchJoke()}>New Joke</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        setup: state.setup,
        punchline: state.punchline,
        showingPunchline: state.showingPunchline,
        isFetching: state.isFetching,
        error: state.error,
        id: state.id,
    }
}

export default connect(mapStateToProps, {showPunchline, fetchJoke})(Joke);
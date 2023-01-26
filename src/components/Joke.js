import React from "react";
import { connect } from "react-redux";
import { showPunchline } from "../actions"



const Joke = (props) => {

    return (
        <div className="joke" id={1}>
            <div className="setup">{props.setup}</div>
            <button onClick={() => props.showPunchline()}>Show punchline</button>
            <div className="punchline">{props.showingPunchline ? props.punchline : ""}</div>
            <button>New Joke</button>
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

export default connect(mapStateToProps, {showPunchline})(Joke);
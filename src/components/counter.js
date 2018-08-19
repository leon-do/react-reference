import React, { Component } from 'react'
import axios from 'axios'

class Counter extends Component {
    constructor() {
        super()
        // store data here
        this.state = {
            count: Math.random()
        }
    }

    // render,  puts shit on screen
    // everything get's wrapped in <React.Fragment> || div
    // use className instead of class.
    // 'btn btn-primary' is a bootstrap thing
    // <ul> must have a unique key
    render = () => {
        return (
            <React.Fragment>
                <h1>{this.state.count}</h1>
                <button className="btn btn-primary" onClick={this.clicked}>
                    counterButton
                </button>
            </React.Fragment>
        ) // jsx expression
    }

    clicked = () => {
        // how to update state
        this.setState({ count: this.state.count + 1 })
    }
}

export default Counter

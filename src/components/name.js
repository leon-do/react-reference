import React, { Component } from 'react'
import axios from 'axios'

class Name extends Component {
    constructor() {
        super()
        // store data here
        this.state = {}
        this.getName()
    }

    // render,  puts shit on screen
    // everything get's wrapped in <React.Fragment> || div
    // use className instead of class.
    // 'btn btn-primary' is a bootstrap thing
    // <ul> must have a unique key
    render = () => {
        return (
            <React.Fragment>
                <h1>{this.state.name}</h1>
            </React.Fragment>
        ) // jsx expression
    }

    getName = async () => {
        const response = await axios.get('https://randomuser.me/api/')
        const name = response.data.results[0].name.first
        this.setState({ name: name })
    }
}

export default Name

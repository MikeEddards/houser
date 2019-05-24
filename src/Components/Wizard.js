import React, { Component } from 'react'
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_ZIP} from '../store'
export default class Wizard extends Component {
    constructor(){
        super()
        const redux = store.getState()
        this.state = {
            name: redux.name,
            address: redux.address,
            city: redux.city,
            state: redux.state,
            zip: redux.zip
        }
    }
    componentDidMount(){
        store.subscribe(() => {
            let newState = store.getState()
            this.setState({
                name: newState.name,
                address: newState.address,
                city: newState.city,
                state: newState.state,
                zip: newState.zip
            })
        })}
         
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


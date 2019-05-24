import React, { Component } from 'react'
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_ZIP, UPDATE_IMG, UPDATE_MORTGAGE,UPDATE_RENT} from '../store'
import {Link} from 'react-router-dom'
import './Wizard.css'

export default class Wizard extends Component {
    constructor(){
        super()
        const redux = store.getState()
        this.state = {
            name: redux.name,
            address: redux.address,
            city: redux.city,
            state: redux.state,
            zip: redux.zip,
            img: redux.img,
            mortgage: redux.mortgage,
            rent: redux.rent,
            pageOne: 1
        }
    }
nameChange(val){
    this.setState({name: val})
}
addressChange(val){
    this.setState({address: val})
}
cityChange(val){
    this.setState({city: val})
}
stateChange(val){
    this.setState({state: val})
}
zipChange(val){
    this.setState({zip: val})
}
imgChange(val){
    this.setState({img: val})
}
mortgageChange(val){
    this.setState({mortgage: val})
}
rentChange(val){
    this.setState({rent: val})
}
saveChanges(){
    console.log(this.state)
    store.dispatch({
        type: UPDATE_NAME, 
        payload: this.state.name
    })
    store.dispatch({
        type: UPDATE_ADDRESS, 
        payload: this.state.address
    })
    store.dispatch({
        type: UPDATE_CITY,
        payload: this.state.city
    })
    store.dispatch({
        type: UPDATE_ZIP,
        payload: this.state.zip
    })
    store.dispatch({
        type: UPDATE_IMG,
        payload: this.state.img
    })
    store.dispatch({
        type: UPDATE_MORTGAGE,
        payload: this.state.mortgage
    })
    store.dispatch({
        type: UPDATE_RENT,
        payload: this.state.rent
    })
    
}
nextChange = () => {
    this.setState({pageOne: this.state.pageOne + 1})
}
prevChange = () => {
    this.setState({pageOne: this.state.pageOne - 1})
}
         
    render() {
        console.log(this.state)
        return (
            <div className='mainWiz'>
                {this.state.pageOne === 1 ?
                <div className='contanerWiz'>
                <div className='listing'>
                    <h1>Add New Listing</h1>
                    <Link to='/' className='cancel'>Cancel</Link>
                </div>
                <div className='form'>
                    <h3>Property Name</h3>
                    <input value={this.state.name} onChange={e => this.nameChange(e.target.value)} type="text"/>
                    <h3>Address</h3>
                    <input value={this.state.address} onChange={e => this.addressChange(e.target.value)} type="text" />
                    <div>
                        <div className='city'>
                            <h3>City</h3>
                            <input value={this.state.city} onChange={e => this.cityChange(e.target.value)} type="text" />
                        </div>
                        <div className='state'>
                            <h3>State</h3>
                            <input value={this.state.state} onChange={e => this.stateChange(e.target.value)} type="text" />
                        </div>
                        <div className='zip'>
                            <input value={this.state.zip} onChange={e => this.zipChange(e.target.value)} type="number" />
                        </div>
                    </div>
                    <Link className='addNew' onClick={this.nextChange} >next</Link>
                </div>

                </div>
                : this.state.pageOne === 2 ? <div className='listing'>
                <h1>Add New Listing</h1>
                <Link to='/' className='cancel'>Cancel</Link>
                <h3>Image URL</h3>
                <input onChange={e => this.imgChange(e.target.value)} type="text" />
                <Link className='addNew' onClick={this.prevChange} >Previous</Link><Link className='addNew' onClick={this.nextChange} >Next</Link>
            </div> : this.state.pageOne === 3 ? <div className='listing'>
                <h1>Add New Listing</h1>
                <Link to='/' className='cancel'>Cancel</Link>
                <h3>Monthly Mortgage Amount</h3>
                <input onChange={e => this.mortgageChange(e.target.value)} type="number" />
                <h3>Desired Monthly Rent</h3>
                <input onChange={e => this.rentChange(e.target.value)} type="number" />
                <Link className='addNew' onClick={this.prevChange} >Previous</Link><Link className='addNew' onClick={this.saveChanges} >Complete</Link>
            </div> : null }
            </div>
        )
    }
}


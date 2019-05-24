import React, { Component } from 'react'
import store, { DB_CALL } from '../store'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            houses: reduxState.houses
        }
    }
    async componentDidMount(){
        store.subscribe(() => {
            let newState = store.getState()
            this.setState({
                houses: newState.houses
            })
        })    
      
       let data = await axios.get('/api/homes')   
        store.dispatch({
            type: DB_CALL,
            payload: data.data
        })
        
        
}
handleDelete = (id) => {
    axios.delete(`/api/homes/${id}`).then(res => {  
    store.dispatch({
        type: DB_CALL,
        payload: res.data
    })
 } )
}

    render() {
        console.log(this.state)
        let homes = this.state.houses.map((home) => (

            <div key={home.id} className='listingBox'>
                <div>
                    <img className='houseImg' src={home.img} alt={home.name}/>
                </div>
                <div className='info'>
                    <p>Property Name: {home.name}</p>
                    <p>Address: {home.address}</p>
                    <p>City: {home.city}</p>
                    <p>State: {home.state}</p>
                    <p>Zip: {home.zip}</p>
                </div>
                <div className='monthly'>
                    <p>Monthly Mortgage: {home.mortgage}</p>
                    <p>Desired Rent: {home.rent}</p>
                </div>
                <div>
                   <img className='delete' src="https://img.icons8.com/metro/420/delete-sign.png" alt="" onClick={() => this.handleDelete(home.id)} />
                </div>
            </div>
 ))

        return (
            <div className='main'>
            <div className='contaner'>
                <div className='dash'>
                    <h1>Dashboard</h1>
                    <Link className='addNew' to='/wizard'>
                    <h3  >Add New Property</h3>
                    </Link>
                    
                </div>
                <div className='listingContainer'>
                <h3>Home Listings</h3>
                {homes}
                </div>
            </div>
            </div>
        )
    }
}

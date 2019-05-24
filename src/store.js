import {createStore} from 'redux'


const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0,
    houses: []
  
}
console.log(initialState)
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_ZIP = 'UPDATE_ZIP'
export const UPDATE_IMG = 'UPDATE_IMG'
export const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
export const UPDATE_RENT = 'UPDATE_RENT'
export const DB_CALL = 'DC_CALL'

function reducer(state = initialState, action){
    const {type, payload} = action
    switch (type){
        case UPDATE_NAME: 
            return {...state, name: payload}
        case UPDATE_ADDRESS:
            return {...state, address: payload}
        case UPDATE_CITY:
            return {...state, city: payload}
        case UPDATE_ZIP:
            return {...state, zip: payload}
        case UPDATE_IMG: 
            return {...state, img: payload}
        case UPDATE_MORTGAGE:
            return {...state, motgage: payload}
        case UPDATE_RENT:
            return {...state, rent: payload}
        case DB_CALL:
            console.log(payload)
            return  {...state, houses: payload}    
            default:
            return state
    }
}

export default createStore(reducer)
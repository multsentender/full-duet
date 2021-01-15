import {
    SETDATA, 
    SETLOADED, 
    GETMORE,
    SENDNEWDATA,
    UPDCURRENTDATA,
    DELETECURRENTDATA
} from '../actions/data'

const initialState = {
    products: {
        items: [],
        count: 0
    },
    gallery: [],
    filters: {
        types: [],
        manufactured: []
    },
    isLoaded: false,
};


const data = (state = initialState, action) => {
    switch(action.type) {
        case SETDATA: 
            return {
                ...state,
                products: action.products,
                gallery: action.gallery ? action.gallery : [],
                filters: action.filters,
                isLoaded: true,
            }
        case SETLOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        case GETMORE: 
            return {
                ...state,
                products: {
                    ...state.products,
                    items: [...state.products.items, ...action.payload],
                }
            }
        default: 
            return state
    }
}

export default data
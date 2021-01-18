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
    gallery: {
        items: []
    },
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
                gallery: action.gallery ? {items: action.gallery} : {items: []},
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
        case SENDNEWDATA: {
            if(action.path === 'manufactured' || action.path === 'types'){
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [action.path]: [
                            ...state.filters[action.path], action.obj
                        ]
                    }
                }
            } else {
                return {
                    ...state,
                    [action.path]: {
                        ...state[action.path],
                        items: [...state[action.path].items, action.obj]
                    }
                }
            }
        }
        case UPDCURRENTDATA: {
            if(action.path === 'manufactured' || action.path === 'types'){
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [action.path]: 
                            state.filters[action.path].map(el => {
                                return el._id === action.obj._id ? action.obj : el
                            })
                    }
                }
            } else {
                return {
                    ...state,
                    [action.path]: {
                        ...state[action.path],
                        items: 
                            state[action.path].items.map(el => {
                                return el._id === action.obj._id ? action.obj : el
                            })
                    }
                }
            }
        }  
        case DELETECURRENTDATA: {
            if(action.path === 'manufactured' || action.path === 'types'){
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [action.path]: 
                            state.filters[action.path].filter(el => {
                                return el._id !== action._id
                            })
                        
                    }
                }
            } else {
                return {
                    ...state,
                    [action.path]: {
                        ...state[action.path],
                        items: state[action.path].items.filter(el => {
                            return el._id !== action._id
                        })
                    }
                }
            }
        }
        default: 
            return state
    }
}

export default data
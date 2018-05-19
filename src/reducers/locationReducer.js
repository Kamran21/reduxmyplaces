import CONSTANTS from "../constants";

 const locationReducer = (state = [], action) => {
    
    switch (action.type) {

        case CONSTANTS.CREATE_LOCATION:

            return [ ...state, {...action.location} ];
        
        case CONSTANTS.UPDATE_LOCATION:
            
            return state.map(item => item.id !== action.location.id ? item : {...action.location} );

        case CONSTANTS.DELETE_CATEGORY:

            return state.filter( item => item.id !== action.id );

        default:
            return state;
    }

};

export default locationReducer;
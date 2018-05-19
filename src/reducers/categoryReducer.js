import CONSTANTS from "../constants";

const categoryReducer = (state = [], action) => {
    
    switch (action.type) {

        case CONSTANTS.CREATE_CATEGORY:

            return [ ...state, {...action.category} ];

        case CONSTANTS.UPDATE_CATEGORY:

            return state.map( item => item.id !== action.category.id ? item : {...action.category} );

        case CONSTANTS.DELETE_CATEGORY:

            return state.filter( item => item.id !== action.id ); 

        default:
            return state;
    }
    
};

export default categoryReducer;
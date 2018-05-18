import CONSTANTS from "../constants";

const categoryReducer = (state = [], action) => {
    
    switch (action.type) {

        case CONSTANTS.CREATE_CATEGORY:

            return [ ...state, {...action.category} ];

        case CONSTANTS.UPDATE_CATEGORY:

            return state.map(item => {
                if(item.id !== action.category.id){
                    return item;
                } 

                return {...action.category};
            });

        case CONSTANTS.DELETE_CATEGORY:

            return state.filter( item => {
                if(item.id !== action.id)
                    return item;
            });

        default:
            return state;
    }
    
};

export default categoryReducer;
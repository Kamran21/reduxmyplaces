import CONSTANTS from "../constants";

 const locationReducer = (state = [], action) => {
    
    switch (action.type) {

        case CONSTANTS.CREATE_LOCATION:

            return [ ...state, {...action.location} ];
        
        case CONSTANTS.UPDATE_LOCATION:
            
            return state.map(item => {
                if(item.id !== action.location.id){
                    return item;
                } 

                return {...action.location};
            });

        case CONSTANTS.DELETE_CATEGORY:

            return state.filter( item => {
                if(item.id !== action.id){
                    return item;
                }      
            });

        default:
            return state;
    }

};

export default locationReducer;
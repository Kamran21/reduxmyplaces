import CONSTANTS from "../constants";

 const locationReducer = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.CREATE_LOCATION:
            return [ ...state, {...action.location} ];
        default:
            return state;
    }
};

export default locationReducer;
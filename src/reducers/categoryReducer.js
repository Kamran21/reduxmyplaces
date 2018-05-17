import CONSTANTS from "../constants";

const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.CREATE_CATEGORY:
            return [ ...state, {...action.category} ];
        default:
            return state;
    }
};

export default categoryReducer;
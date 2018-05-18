import CONSTANTS from "../constants";

export function createLocation(location){
    return { type : CONSTANTS.CREATE_LOCATION, location }
}
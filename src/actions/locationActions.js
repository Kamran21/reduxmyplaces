import CONSTANTS from "../constants";
import v4 from 'node-uuid';

export function createLocation(location){
    location.id=v4();
    return { type : CONSTANTS.CREATE_LOCATION, location }
}
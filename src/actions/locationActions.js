import CONSTANTS from "../constants";
import v4 from 'node-uuid';

export function createLocation(location){
    location.id=v4();
    return { type : CONSTANTS.CREATE_LOCATION, location }
}

export function updateeLocation(category){
    return { type : CONSTANTS.UPDATE_LOCATION, category };
}

export function deleteLocation(id){
    return { type : CONSTANTS.DELETE_LOCATION, id };
}
import CONSTANTS from "../constants";
import v4 from 'node-uuid';

export function createCategory(category){
    category.id= v4();
    return { type : CONSTANTS.CREATE_CATEGORY, category };
}

export function updateCategory(category){
    return { type : CONSTANTS.UPDATE_CATEGORY, category };
}

export function deleteCategory(id){
    return { type : CONSTANTS.DELETE_CATEGORY, id };
}
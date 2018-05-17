import CONSTANTS from "../constants";

export function createCategory(category){
    return { type : CONSTANTS.CREATE_CATEGORY, category };
}
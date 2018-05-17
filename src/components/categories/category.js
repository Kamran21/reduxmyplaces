import React from 'react';

const Category = ({category}) => {

    const {id, name} = category;
    
    return (
        <tr>
            <td>{name}</td>
        </tr>
    )
}
 
export default Category;
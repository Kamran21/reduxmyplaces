import React from 'react';

const Category = ({category}) => {

    const {name} = category;
    
    return (
        <tr>
            <td>{name}</td>
        </tr>
    )
}
 
export default Category;
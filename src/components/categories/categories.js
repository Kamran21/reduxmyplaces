import React from 'react';
import Category from "./category";

const Categories = ({categories}) => {

    const categoryItem=(category, index) => {
        return (<Category category={category} key={category.id} />);
    }

    return (
        <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            { categories.map( categoryItem ) }
        </tbody>
    </table>
    )
}
 
export default Categories;
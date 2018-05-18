import React from 'react';
import Category from "./category";

const Categories = ({categories}) => {

    const categoryItem=(category, index) => {
        return (<Category category={category} key={category.id} />);
    }

    return (
        categories.length === 0 ? (<p>No categories yet</p>) : (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                { categories.map( categoryItem ) }
            </tbody>
        </table>)
    )
}
 
export default Categories;
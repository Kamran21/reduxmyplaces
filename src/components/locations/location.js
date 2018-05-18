import React from 'react';

const Location = ({location}) => {
    // debugger;
    const {name, address, coordinates, category}=location;

    return (
        <tr>
            <td>{name}</td>
            {/* <td>{address}</td>
            <td>({coordinates.Latitude},({coordinates.Longitude})</td>
            <td>
                {category.name}
            </td> */}
            <td>address</td>
            <td>(Latitude, Longitude)</td>
            <td>{category}</td>
        </tr>
    )
}
 
export default Location;
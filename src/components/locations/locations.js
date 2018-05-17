import React from 'react';
import Location from "./location";

const Locations = ({locations, categories}) => {

    const locationItem=(location, index) => {
        // debugger;
        return (<Location location={location} key={index} />);
    }

    return (
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Coordinates</th> 
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                { locations.map( locationItem ) }
            </tbody>
        </table>
    )
}
 
export default Locations;
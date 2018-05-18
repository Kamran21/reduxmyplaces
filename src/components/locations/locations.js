import React from 'react';
import Location from "./location";

const Locations = ({locations, categories}) => {

    const locationItem=(location, index) => {
        return (<Location location={location} key={location.id} />);
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as locationActions from '../actions/locationActions';
import Locations from '../components/locations/locations';
import Toolbar from '../components/common/toolbar/Toolbar';

class LocationsPage extends Component {

    constructor(props) {

        super(props);
        
        //Init state
        this.state = { 
                        'newLocation' : { 'name' : '', 'address' : '', 'coordinates' : {}, 'category' : { 'name' : '' } },
                        'action' : ''
                     };

        //Bind functions
        this.onNameChange=this.onNameChange.bind(this);
        this.updateFormState=this.updateFormState.bind(this);
        this.onLocationSave=this.onLocationSave.bind(this);
        this.updateActionState=this.updateActionState.bind(this);

    }

    onNameChange(evt){
        this.updateFormState('name', evt.target.value);
    }

    updateFormState(name, val){
        this.setState({ 'newLocation': {
          [name]: val
        }},()=>{console.log(this.state)});
    }

    updateActionState(val){
        this.setState( { 'action' : val } );
    }
    
    onLocationSave(evt){
       evt.preventDefault();
       this.props.actions.createLocation(this.state.newLocation);
       this.setState({ 
            'newLocation' : { 'name' : '', 'address' : '', 'coordinates' : {}, 'category' : { 'name' :'' } }
        });
    }

    //Render
    locationItem(location, index){
        return <li key={index}>{location.name}</li>;
    }

    render(){ 
        return ( 
            <div>
               <h1>Locations</h1>
               <Toolbar title="Locations" action={this.state.action} updateAction={this.updateActionState} />
               <Locations locations={this.props.locations} />
               <form onSubmit={this.onLocationSave}>
                   <input type="text" name="location_name" id="locationName" onChange={this.onNameChange} value={this.state.newLocation.name}/>
                   <button type="submit" disabled={this.state.newLocation.name===''}>Add</button>
               </form>
           </div>   
        )
    }

}

//Prop Types validation
LocationsPage.propTypes={
    locations: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//Redux connect
const mapStateToProps = (state, ownProps) => {

    return { 'locations': state.locations };
};

const mapDispatchToProps = (dispatch) => {

    return { 'actions': bindActionCreators(locationActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);
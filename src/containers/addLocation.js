import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';

import * as locationActions from '../actions/locationActions';
import Locations from '../components/locations/locations';
import Toolbar from '../components/common/toolbar/Toolbar';

class AddLocation extends Component {

    constructor(props) {

        super(props);
        
        //Init state
        this.state = { 'onAdded' : false, 'name' : '', 'address' : '', 'coordinates' : '', 'category' : ''};

        //Bind functions
        this.onNameChange=this.onNameChange.bind(this);
        this.onAddressChange=this.onAddressChange.bind(this);
        this.onCoordinatesChange=this.onCoordinatesChange.bind(this);
        this.onCategoryChange=this.onCategoryChange.bind(this);

        this.updateFormState=this.updateFormState.bind(this);
        this.onLocationSave=this.onLocationSave.bind(this);

    }

    onNameChange(evt){
        this.updateFormState('name', evt.target.value);
    }

    onAddressChange(evt){
        this.updateFormState('address', evt.target.value);
    }

    onCoordinatesChange(evt){
        this.updateFormState('coordinates', evt.target.value);
    }

    onCategoryChange(evt){
        this.updateFormState('category', evt.target.value);
    }

    updateFormState(name, val){
        this.setState( { [name] : val} );
    }
    
    onLocationSave(evt){
       evt.preventDefault();
       this.props.actions.createLocation(this.state);
       this.setState({ 'onAdded' : true, 'name' : '', 'address' : '', 'coordinates' : '', 'category' : ''});
    }

    //Render
    categoryItem(item, index){
        return <option value={item.name} key={item.name}>{item.name}</option>;
    }

    render(){ 

        const added = this.state.onAdded;

        return (
            <div>
            {
                added ? ( <Redirect to="/"/> ) : (
                    <div>
                        <h2>Add Location</h2>
                        { 
                            this.props.categories &&
                            <form onSubmit={this.onLocationSave}>
                                <input type="text" name="location_name" id="locationName" onChange={this.onNameChange} value={this.state.name}/>
                                <input type="text" name="location_address" id="locationAddress" onChange={this.onAddressChange} value={this.state.address}/>
                                <input type="text" name="location_coordinates" id="locationCoordinates" onChange={this.onCoordinatesChange} value={this.state.coordinates}/>

                                <select onChange={this.onCategoryChange}>
                                    <option value="select" defaultValue="select">-select-</option>
                                    {this.props.categories.map(this.categoryItem)}
                                </select>
                                <button type="submit" disabled={this.state.name==='' || this.state.category===''}>Add</button>
                            </form>
                        }
                    </div>

                )
                
            }
            </div>
              
        )
    }

}

//Prop Types validation
AddLocation.propTypes={
    categories: PropTypes.array,
    actions: PropTypes.object.isRequired
};

//Redux connect
const mapStateToProps = (state, ownProps) => {

    return { 'categories': state.categories };
};

const mapDispatchToProps = (dispatch) => {

    return { 'actions': bindActionCreators(locationActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation);
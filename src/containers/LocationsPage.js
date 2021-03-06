import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as locationActions from '../actions/locationActions';

import Toolbar from '../components/common/toolbar/Toolbar';
import Locations from '../components/locations/locations';


class LocationsPage extends Component {

    constructor(props) {

        super(props);
        
        //Init state
        this.state = { 
            'action' : ''
         }

        //Bind functions
        this.updateActionState=this.updateActionState.bind(this);

    }

    updateActionState(val){
        this.setState( { 'action' : val } );
    }
    
    //Render
    render(){
        const categoriesSize=this.props.categoriesSize;
        const editable=this.props.locations.length;
        return (
            categoriesSize === 0 ? ( <p>The list of locations and categories is empty create a category first and then you will be able to manage locations</p> ) : (
            <div>
               <Toolbar title="Locations" action={this.state.action} updateAction={this.updateActionState} editable={editable} path="/addlocation"/>
               <Locations locations={this.props.locations} />
           </div> )   
        )
    }

}

//Prop Types validation
LocationsPage.propTypes={
    locations: PropTypes.array.isRequired,
    categoriesSize: PropTypes.number,
    actions: PropTypes.object.isRequired
};

//Redux connect
const mapStateToProps = (state, ownProps) => {

    return {
        'locations': state.locations,
        'categoriesSize': state.categories.length,
    };

};

const mapDispatchToProps = (dispatch) => {

    return { 'actions': bindActionCreators(locationActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);
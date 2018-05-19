import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';

import * as categoryActions from '../actions/categoryActions';

class AddCategory extends Component {

    constructor(props) {

        super(props);
        
        //Init state
        this.state = { 'onAdded' : false, 'name' : '' };

        //Bind functions
        this.onNameChange=this.onNameChange.bind(this);

        this.updateFormState=this.updateFormState.bind(this);
        this.onSave=this.onSave.bind(this);

    }

    onNameChange(evt){
        this.updateFormState('name', evt.target.value);
    }

    updateFormState(name, val){
        this.setState( { [name] : val} );
    }
    
    onSave(evt){
       evt.preventDefault();
       this.props.actions.createCategory(this.state);
       this.setState({ 'onAdded' : true, 'name' : '' });
    }

    //Render
    render(){ 

        const added = this.state.onAdded;

        return (
            <div>
            {
                added ? ( <Redirect to="/cat"/> ) : (
                    <div>
                        <h2>Add Category</h2>
                        { 
                            this.props.categories &&
                            <form onSubmit={this.onSave}>
                                <input type="text" name="location_name" id="locationName" onChange={this.onNameChange} value={this.state.name}/>
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
AddCategory.propTypes={
    categories: PropTypes.array,
    actions: PropTypes.object.isRequired
};

//Redux connect
const mapStateToProps = (state, ownProps) => {

    return { 'categories': state.categories };
};

const mapDispatchToProps = (dispatch) => {

    return { 'actions': bindActionCreators(categoryActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
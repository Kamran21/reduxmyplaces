import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import * as categoryActions from '../actions/categoryActions';

import Toolbar from '../components/common/toolbar/Toolbar';
import Categories from '../components/categories/categories';


class CategoriesPage extends Component {

    constructor(props) {

        super(props);

        //Init state
        this.state = { 
            'newCategory' : { 'name' : ''}
         }

        //Bind functions
        this.onNameChange=this.onNameChange.bind(this);
        this.onCategorySave=this.onCategorySave.bind(this);
    }
    
    onNameChange(evt){
        this.updateFormState('name', evt.target.value);
    }

    updateFormState(name, val){
        this.setState({ 'newCategory': {
          [name]: val
        }},()=>{console.log(this.state)});
    }

    onCategorySave(evt){
        evt.preventDefault();
        this.props.actions.createCategory(this.state.newCategory);
        this.setState({ 
             'newCategory' : { 'name' : ''}
         });
     }

    //Render
    render() { 
        return ( 
           <div>
               <h1>Categories</h1>
               {/* <Toolbar title="categories"/> */}
               <Categories categories={this.props.categories} />
               <form onSubmit={this.onCategorySave}>
                   <input type="text" name="category_name" id="categoryName" onChange={this.onNameChange} value={this.state.newCategory.name}/>
                   <button type="submit" disabled={this.state.newCategory.name===''}>Add</button>
               </form>
           </div>   
        )
    }

}

//Prop Types validation
CategoriesPage.propTypes={
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//Redux connect
const mapStateToProps = (state, ownProps) => {

    return { 'categories': state.categories };
};

const mapDispatchToProps = (dispatch) => {

    return { 'actions': bindActionCreators(categoryActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
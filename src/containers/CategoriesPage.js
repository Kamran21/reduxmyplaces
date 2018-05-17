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

    }

    //Render
    render() { 
        return ( 
           <div>
               <h1>Categories</h1>
               {/* <Toolbar title="categories"/> */}
               <Categories categories={this.props.categories} />
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
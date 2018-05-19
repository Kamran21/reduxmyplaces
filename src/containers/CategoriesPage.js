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
            'action' : ''
         }

        //Bind functions 
        this.updateActionState=this.updateActionState.bind(this);
    }
    

    updateActionState(val){
        this.setState( { 'action' : val } );
    }


    //Render
    render() {
        const editable=this.props.categories.length;
        return ( 
           <div>
               <Toolbar title="Categories" action={this.state.action} updateAction={this.updateActionState} editable={editable} path="/addcategory"/>
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
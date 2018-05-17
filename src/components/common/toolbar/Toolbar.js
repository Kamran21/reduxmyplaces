import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar = (props) => {

    const { title, updateAction, action } = props;
    
    function deleteHandler(evt) {
        evt.preventDefault();
        updateAction("delete");
    }

    function updateHandler(evt) {
        evt.preventDefault();
        updateAction("update");
    }

    // function addHandler(evt) {
    //     evt.preventDefault();
    //     updateAction("add");
    // }

    return (
        <div className="toolbar">
            <h2 className="toolbar__title">{title} manager</h2>
            <div className="toolbar__buttons">
                <button className={'toolbar__btn ' + (action==='delete' ? 'toolbar__btn toolbar__btn--active' : '')}  onClick={deleteHandler}>-</button>
                <button className={'toolbar__btn ' + (action==='update' ? 'toolbar__btn toolbar__btn--active' : '')} onClick={updateHandler}>u</button>
                {/* <button className={'toolbar__btn ' + (action==='add' ? 'toolbar__btn toolbar__btn--active' : '')} onClick={addHandler}>+</button> */}
                <NavLink to='/addlocation' activeClassName="nav__link--active" className='nav__link'><button className='toolbar__btn'>+</button></NavLink>
            </div>
        </div>
    );

}
 
export default Toolbar;
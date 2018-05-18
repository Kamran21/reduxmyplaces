import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar = (props) => {

    const { title, updateAction, action, editable, path } = props;
    
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
    // function checkActive(str){
    //     return action===str ? ' toolbar__btn--active' : '';
    // }

    // function checkDisabled(){
    //     return action===str ? ' toolbar__btn--active' : '';
    // }

    function addAttr(value, condition, class_to_add){
        return (value===condition) ? (' ' + class_to_add) : '';
    }


    return (
        <div className="toolbar">
            <h2 className="toolbar__title">{title} manager</h2>
            <div className="toolbar__buttons">
                <button className={'toolbar__btn' + (addAttr(action, 'delete', 'toolbar__btn--active')) + addAttr(!!editable,false,'toolbar__btn--disabled')} onClick={deleteHandler} disabled={addAttr(!!editable,false,'disabled')}>-</button>
                <button className={'toolbar__btn' + (addAttr(action, 'update', 'toolbar__btn--active')) + addAttr(!!editable,false,'toolbar__btn--disabled')} onClick={updateHandler} disabled={addAttr(!!editable,false,'disabled')}>u</button>
                {/* <button className={'toolbar__btn ' + (action==='add' ? 'toolbar__btn toolbar__btn--active' : '')} onClick={addHandler}>+</button> */}
                <NavLink to={path} activeClassName="nav__link--active" className='nav__link'><button className='toolbar__btn'>+</button></NavLink>
            </div>
        </div>
    );

}
 
export default Toolbar;
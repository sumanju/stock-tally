import React from 'react'
import "./TodoListItem.css"
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from './redux/action';

const TodoListItem = function(props) {
    return (
        <div className="item-container">
            <div className="item-container-text">
                {props.item + "-" + (props.isComplete ? "Done" : "Pending")}
            </div>
            <div className="item-container-action">
                <button className="button1"
                        onClick={() => {
                            props.onCompletePress(props.item)
                        }}> complete </button>
                <button className="button1"
                        onClick={() => {
                            props.onRemovePress(props.item)
                        }}>Remove</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    onRemovePress : text => dispatch(removeTodo(text)),
    onCompletePress : text => dispatch(completeTodo(text))
})
  
export default connect(null, mapDispatchToProps)(TodoListItem);
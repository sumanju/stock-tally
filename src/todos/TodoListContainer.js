import React, { useState } from 'react';
import "./TodoListContainer.css";
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { createTodo } from './redux/action';

const TodoListContainer = function({ todos, onCreatePress }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <React.Fragment>
      <div className="form-container">
        <input  type="text" 
                className="input-box" 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}></input>
        <button type="submit" 
                className="submit"
                onClick={() => {
                  onCreatePress(inputValue);
                  setInputValue("");
                }}>Add</button>
      </div>
      <div className="wrapper-container">
        { todos.map((data) => 
            <TodoListItem
              key = {data.text}
              item = {data.text}
              isComplete = {data.isComplete} />) 
        }
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  onCreatePress : text => dispatch(createTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
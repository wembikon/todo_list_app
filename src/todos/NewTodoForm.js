import React from 'react';

import './NewTodoForm.css';

const NewTodoForm = () => (
  <div className="new-todo-form">
    <input className="new-todo-input" type="text" />
    <button className="new-todo-button">Create Todo</button>
  </div>
);

export default NewTodoForm;
import React, { useState } from 'react';

const TodoApp = () => {

  const [td, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (e) => {

    setInputValue(e.target.value);

  };

  const handleAddTodo = () => {

    if (inputValue.trim() !== '') {

      setTodos([...td, inputValue]);

      setInputValue('');

    }

  };




  const handleDeleteTodo = (index) => {

    const newTodos = td.filter((_, i) => i !== index);

    setTodos(newTodos);

  };




  return (

    <div>

      <h1>Todo App</h1>

      <input type="text" value={inputValue} onChange={handleInputChange} />

      <button onClick={handleAddTodo}>Add</button>

      <ul>

        {td.map((todo, index) => (

          <li key={index}>

            {todo}

            <button onClick={() => handleDeleteTodo(index)}>Delete</button>

          </li>

        ))}

      </ul>

    </div>

  );

};

export default TodoApp;
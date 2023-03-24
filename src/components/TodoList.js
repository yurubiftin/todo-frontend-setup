import { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/todos', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(todos => setTodos(todos));
  }, []);

  function handleDelete(id) {
    fetch(`/api/todos/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(() => {
      setTodos(todos.filter(todo => todo.id !== id));
    });
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

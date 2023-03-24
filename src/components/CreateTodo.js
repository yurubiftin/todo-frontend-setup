import { useState } from 'react';

function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('/api/todos', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    }).then(response => {
      if (response.ok) {
        alert('Todo created successfully');
      } else {
        alert('Failed to create todo');
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateTodo;

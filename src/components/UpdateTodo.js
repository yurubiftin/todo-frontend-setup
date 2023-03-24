import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function UpdateTodo() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetch(`/api/todos/${id}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(todo => {
        setTitle(todo.title);
        setDescription(todo.description);
      });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`/api/todos/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    }).then(response => {
      if (response.ok) {
        alert('Todo updated successfully');
        history.push('/');
      } else {
        alert('Failed to update todo');
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
      <button type="submit">Update Todo</button>
    </form>
  );
}

export default UpdateTodo;

import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function DeleteTodo() {
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

  function handleDelete() {
    fetch(`/api/todos/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(() => {
      alert('Todo deleted successfully');
      history.push('/');
    });
  }

  return (
    <div>
      <h1>Delete Todo</h1>
      <p>Are you sure you want to delete this todo?</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteTodo;

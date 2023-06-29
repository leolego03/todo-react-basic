import { useState } from 'react';
import './App.css';

function App() {
  const initialTodos = [
    {
      id: 1,
      title: "react를 배워봅시다",
    },
  ];

  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  const onChangeTitle = e => setTitle(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if(title) {
      setTodos([...todos, { id: todos.length + 1, title: title }]);
    }
  }

  return (
    <div>
      <div className='Form-container'>
        <form onSubmit={onSubmit}>
          <input 
            onChange={onChangeTitle}
            value={title}
          />
          <button type='submit'>추가하기</button>
          <h3>Todo List</h3>
        </form>
      </div>

      <div className='Todo-container'>
        {todos.map((todo) => (
          <div className='Todo' key={todo.id}>
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

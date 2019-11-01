import React, { useState, useCallback, useEffect } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array =[];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id:i,
      text:`할일 ${i}`,
      checked: false,
    })
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // useEffect(() => {
  //   // 로컬스토리지에 Todos가 있다면 불러오기
  //   const loaded = localStorage.getItem('Todos');
  //   if (loaded !== null) {
  //     const parseTodos = JSON.parse(loaded);
  //     setTodos(parseTodos);
  //   }
  // }, []);

  // useEffect(() => {
  //   // todos가 변경되었을 때 실행
  //   localStorage.setItem('Todos', JSON.stringify(todos));
  // }, [todos]);

  const onInsert = useCallback(
    text => {
      setTodos(() => [
        ...todos,
        {
          id: Date.now(),
          text,
          checked: false,
        },
      ]);
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;

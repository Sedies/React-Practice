import React, { useState, useCallback, useEffect } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoOption from './components/TodoOption';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      num: 1,
      text: '할 일',
      checked: false,
    },
    {
      num: 2,
      text: '옵션도 추가해서 해보자',
      checked: false,
    },
  ]);

  const [colors, setColors] = useState([
    {
      num: 1,
      id: 'background-orange',
      background: '#ff7346',
      checked: true,
    },
    {
      num: 2,
      id: 'background-pink',
      background: '#f562a6',
      checked: false,
    },
    {
      num: 3,
      id: 'background-blue',
      background: '#1e98c6',
      checked: false,
    },
    {
      num: 4,
      id: 'background-gray',
      background: '#90a4ae',
      checked: false,
    },
  ]);

  const onColorChecked = useCallback(
    num => {
      setColors(
        colors.map(color =>
          color.num === num
            ? { ...color, checked: true }
            : { ...color, checked: false },
        ),
      );
    },
    [colors],
  );

  const onInsert = useCallback(
    text => {
      setTodos(() => [
        ...todos,
        {
          num: Date.now(),
          text,
          checked: false,
        },
      ]);
    },
    [todos],
  );

  const onRemove = useCallback(
    num => {
      setTodos(todos.filter(todo => todo.num !== num));
    },
    [todos],
  );

  const onToggle = useCallback(
    num => {
      setTodos(
        todos.map(todo =>
          todo.num === num ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate colors={colors}>
      <TodoOption colors={colors} onColorChecked={onColorChecked} />
      <TodoInput onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;

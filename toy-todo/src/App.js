import React, { useState, useCallback, useEffect } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoOption from './components/TodoOption';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loaded = localStorage.getItem('Todo');
    if(loaded !== null) {
      const parseTodos = JSON.parse(loaded);
      setTodos(parseTodos)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('Todo', JSON.stringify(todos))
  }, [todos])

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
  //배경색 선택된 값 체크
  const [colorCheck, setColorCheck] = useState('');
  //레이아웃 옵션이 선택된 값 체크
  const [layoutCheck, setLayoutCheck] = useState('');

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
    <TodoTemplate colors={colors} setColorCheck={setColorCheck}>
      <TodoOption
        colors={colors}
        onColorChecked={onColorChecked}
        setLayoutCheck={setLayoutCheck}
        layoutCheck={layoutCheck}
      />
      <TodoInput onInsert={onInsert} colorCheck={colorCheck} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        layoutCheck={layoutCheck}
      />
    </TodoTemplate>
  );
};

export default App;

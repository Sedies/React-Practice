import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const Todolist = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-x: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <Todolist>
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </Todolist>
  );
};

export default TodoList;

import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const Todolist = styled.div``;

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <Todolist>
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.num}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </Todolist>
  );
};

export default TodoList;

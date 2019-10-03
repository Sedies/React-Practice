import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const Todolist = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-x: auto;
`;

const TodoList = ({ todos }) => {
  return (
    <Todolist>
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </Todolist>
  );
};

export default TodoList;

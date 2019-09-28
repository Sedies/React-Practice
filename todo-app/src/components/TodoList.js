import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const Todolist = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-x: auto;
`;

const TodoList = () => {
  return (
    <Todolist>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </Todolist>
  );
};

export default TodoList;

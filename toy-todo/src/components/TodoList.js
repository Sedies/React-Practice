import React from 'react';
import styled, { css } from 'styled-components';
import TodoListItem from './TodoListItem';

const Todolist = styled.div`
  ${props =>
    props.layoutCheck === 'card'
      ? css`
          column-count: 2;
        `
      : ``};
`;

const TodoList = ({ todos, onRemove, onToggle, layoutCheck }) => {
  return (
    <Todolist layoutCheck={layoutCheck}>
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.num}
          onRemove={onRemove}
          onToggle={onToggle}
          layoutCheck={layoutCheck}
        />
      ))}
    </Todolist>
  );
};

export default TodoList;

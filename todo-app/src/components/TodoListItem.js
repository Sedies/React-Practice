import React from 'react';
import styled, { css } from 'styled-components';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
  ${props =>
    props.checked &&
    css`
      ${CheckBox} {
        svg {
          color: #22b8cf;
        }
      }
      ${Text} {
        color: #adb5bd;
        text-decoration: line-through;
      }
    `}
`;
const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <TodoItem checked={checked}>
      <CheckBox onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text>{text}</Text>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoItem>
  );
};

export default TodoListItem;

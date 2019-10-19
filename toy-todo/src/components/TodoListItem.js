import React from 'react';
import styled, { css } from 'styled-components';
import {
  MdIndeterminateCheckBox,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from 'react-icons/md';

const Todolistitem = styled.div`
  display: flex;
  background: #fff;
  border-radius: 10px;
  height: 35px;
  margin-top: 20px;
  padding: 0 5px;
  .checkBox {
    align-items: center;
    display: flex;
    flex: 1;

    svg {
      cursor: pointer;
      color: #a2aaad;
      font-size: 1.25rem;
      &:hover {
        color: #4dd0e1;
      }
    }
    p {
      flex: 1;
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
  }
  ${props =>
    props.checked &&
    css`
      .checkBox {
        svg {
          color: #4dd0e1;
        }
        p {
          color: #a2aaad;
          text-decoration: line-through;
        }
      }
    `}
  .remove {
    display: flex;
    font-size: 1.25rem;
    align-items: center;
    color: #a2aaad;
    cursor: pointer;
    &:hover {
      color: tomato;
    }
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { num, text, checked } = todo;
  return (
    <Todolistitem checked={checked}>
      <div className="checkBox" onClick={() => onToggle(num)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <p>{text}</p>
      </div>
      <div className="remove" onClick={() => onRemove(num)}>
        <MdIndeterminateCheckBox />
      </div>
    </Todolistitem>
  );
};

export default TodoListItem;

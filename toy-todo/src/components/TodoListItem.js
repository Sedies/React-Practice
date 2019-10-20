import React from 'react';
import styled, { css } from 'styled-components';
import {
  MdIndeterminateCheckBox,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from 'react-icons/md';

const Todolistitem = styled.div`
  display: flex;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  min-height: 43px;
  margin-top: 20px;
  padding: 5px;

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
  ${props =>
    props.layoutCheck === 'card'
      ? `
        transition: ease-in-out 0.2s;
        width: 240px;
        min-height:80px;
        &:nth-of-type(2n) {
          margin-left: 20px;
        }
        .remove, .checkBox svg {
          align-self:flex-start !important;
        }
        .checkBox p {
          padding:0.8rem 0.5rem 0.5rem 0;
          text-align:center;
          align-self:flex-start !important;
        }
      `
      : `
        transition: ease-in-out 0.2s;
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

const TodoListItem = ({ todo, onRemove, onToggle, layoutCheck }) => {
  const { num, text, checked } = todo;
  return (
    <Todolistitem checked={checked} layoutCheck={layoutCheck}>
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

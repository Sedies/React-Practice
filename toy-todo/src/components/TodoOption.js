import React from 'react';
import styled from 'styled-components';
import { MdList, MdViewModule } from 'react-icons/md';

const OptionWrap = styled.div`
  transition: ease-in backgournd 0.4s;
  margin-bottom: 1.5rem;
  display: flex;
  > div {
    flex: 1;
    align-items: center;
    width: 50%;
    height: 20px;
  }
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  & input {
    display: none;
  }
`;

const LayoutBtn = styled.div`
  > label {
    svg {
      font-size: 1.5rem;
      color: #ebe9e9;
    }
  }
  > label:hover {
    cursor: pointer;
    svg {
      color: #fff;
    }
  }
`;
const BackgroundColorBtn = styled.div`
  margin-left: auto;
`;
const Colors = styled.label`
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #ebe9e9;
  cursor: pointer;
  &:hover {
    border-color: #fff;
  }
  & ~ & {
    margin-left: 10px;
  }
`;

const TodoOption = ({ colors, onColorChecked }) => {
  return (
    <OptionWrap>
      <LayoutBtn>
        <input type="radio" name="btn-layout" id="radio-list" checked />
        <label for="radio-list">
          <MdList />
        </label>
        <input type="radio" name="btn-layout" id="radio-card" />
        <label for="radio-card">
          <MdViewModule />
        </label>
      </LayoutBtn>
      <BackgroundColorBtn>
        {colors.map(color => (
          <>
            <input
              type="radio"
              name="bg"
              id={color.id}
              checked={color.checked}
              onClick={() => onColorChecked(color.num)}
            />
            <Colors
              for={color.id}
              style={{ background: color.background }}
              key={color.num}
            />
          </>
        ))}
      </BackgroundColorBtn>
    </OptionWrap>
  );
};

export default TodoOption;

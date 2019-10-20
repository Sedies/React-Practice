import React from 'react';
import styled from 'styled-components';
import { MdLineWeight, MdDashboard } from 'react-icons/md';

//#region
const OptionWrap = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  > div {
    justify-content: space-between;
    align-items: center;
    height: 20px;
  }
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  input {
    display: none;
  }
`;

const LayoutBtn = styled.div`
  > label {
    svg {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  > label:hover {
    cursor: pointer;
    svg {
      color: rgba(255, 255, 255, 1);
    }
  }
  > label ~ label {
    margin-left: 5px;
  }
  ${props =>
    props.layoutCheck === 'card'
      ? `
    #radio-card + label {
      svg {
        color:#fff;
      }
    }
  `
      : `
    #radio-list + label {
      svg {
        color:#fff;
      }
    }
    `}
`;
const BackgroundColorBtn = styled.div`
  margin-left: auto;
`;
const Colors = styled.label`
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  cursor: pointer;
  &:hover {
    border-color: rgba(255, 255, 255, 1);
  }
  & ~ & {
    margin-left: 10px;
  }
`;
//#endregion

const TodoOption = ({
  colors,
  onColorChecked,
  setLayoutCheck,
  layoutCheck,
}) => {
  const onLayoutChecked = e => setLayoutCheck(e.target.value);

  return (
    <OptionWrap>
      <LayoutBtn layoutCheck={layoutCheck}>
        <input
          type="radio"
          name="btn-layout"
          id="radio-list"
          value="list"
          onClick={e => onLayoutChecked(e)}
          defaultChecked
        />
        <label htmlFor="radio-list" title="라인형">
          <MdLineWeight />
        </label>
        <input
          type="radio"
          name="btn-layout"
          id="radio-card"
          value="card"
          onClick={e => onLayoutChecked(e)}
        />
        <label htmlFor="radio-card" title="카드형">
          <MdDashboard />
        </label>
      </LayoutBtn>
      <BackgroundColorBtn>
        {colors.map(color => (
          <React.Fragment key={color.num}>
            <input
              type="radio"
              name="bg"
              id={color.id}
              defaultChecked={color.checked}
              onClick={() => onColorChecked(color.num)}
            />
            <Colors
              htmlFor={color.id}
              style={{ background: color.background }}
            />
          </React.Fragment>
        ))}
      </BackgroundColorBtn>
    </OptionWrap>
  );
};

export default TodoOption;

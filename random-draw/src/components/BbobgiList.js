import React from "react";
import styled from "styled-components";
import BbobgiListItem from "./BbobgiListItem";
import imgUlTop from "../Assets/img/ul-top.png";
import imgUlBottom from "../Assets/img/ul-bottom.png";
import imgUlLine from "../Assets/img/ul-line.png";

const ListWrap = styled.div`
  padding-bottom: 10px;
  position: relative;
  z-index: 0;
  &:before {
    content: "";
    display: block;
    background: url(${imgUlTop}) no-repeat;
    background-size: contain;
    width: 398px;
    height: 73px;
    position: absolute;
    top: 0;
    left: calc(50% + 2px);
    margin-left: -200px;
    z-index: 1;
  }
  &:after {
    content: "";
    display: block;
    background: url(${imgUlBottom}) no-repeat;
    background-size: contain;
    width: 400px;
    height: 123px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -200px;
    z-index: -1;
  }
`;
const List = styled.ul`
  display: inline-block;
  width: 393px;
  min-height: 200px;
  margin: 72px 106px;
  padding: 0 20px;
  position: relative;
  &:before {
    content: "";
    display: block;
    background: url(${imgUlLine}) repeat-y;
    background-size: contain;
    width: 12px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  &:after {
    content: "";
    display: block;
    background: url(${imgUlLine}) repeat-y;
    background-size: contain;
    width: 12px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
`;
const ResetButton = styled.button`
  padding: 5px 15px;
  border: 0 none;
  border-radius: 30px;
  background: rgba(1, 42, 203);
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 3px 0 gray;
  font-size:1.3rem;
  &:hover {
    background: rgba(1, 42, 203, 0.8);
    box-shadow: none;
  }
`;

const BbobgiList = ({ bbobgis, onRemove, onReset }) => {
  return (
    <ListWrap>
      <List>
        {bbobgis.map(bbobgi => (
          <BbobgiListItem bbobgi={bbobgi} key={bbobgi.id} onRemove={onRemove} />
        ))}
      </List>
      <ResetButton onClick={onReset}>모두 지우기</ResetButton>
    </ListWrap>
  );
};

export default React.memo(BbobgiList);

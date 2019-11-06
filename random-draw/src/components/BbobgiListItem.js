import React from "react";
import styled from "styled-components";

const ListItemWrap = styled.li`
  position: relative;
  display: inline-block;
  border: 1px solid rgba(1, 42, 203);
  border-radius: 5px;
  padding: 0 20px 5px;
  margin-top: 10px;
  & + & {
    margin-left: 10px;
  }
`;
const Delete = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 16px;
  cursor: pointer;
  font-family: monospace;
  &:hover {
    color: darkred;
  }
`;

const BbobgiListItem = ({ bbobgi, onRemove }) => {
  const { id, text } = bbobgi;
  return (
    <ListItemWrap>
      <span>{text}</span>
      <Delete onClick={() => onRemove(id)}>&times;</Delete>
    </ListItemWrap>
  );
};

export default BbobgiListItem;

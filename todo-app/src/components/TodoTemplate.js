import React from 'react';
import styled from 'styled-components';

const TodoWrap = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;
const AppTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background: white;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoWrap>
      <AppTitle>일정 관리</AppTitle>
      <Content>{children}</Content>
    </TodoWrap>
  );
};

export default TodoTemplate;

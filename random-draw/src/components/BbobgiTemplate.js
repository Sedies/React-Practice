import React from "react";
import styled from "styled-components";

const BbobgiWrap = styled.div`
  width: 600px;
  margin: 30px auto;
  text-align: center;
`;
const BbobgiTitle = styled.div`
  font-size: 4rem;
  padding: 2rem 0 0;
`;
const Content = styled.div`
  padding: 20px 0 50px;
`;

const BbobgiTemplate = ({ children }) => {
  return (
    <BbobgiWrap>
      <BbobgiTitle>오늘은 뭘 먹지?</BbobgiTitle>
      <Content>{children}</Content>
    </BbobgiWrap>
  );
};

export default BbobgiTemplate;

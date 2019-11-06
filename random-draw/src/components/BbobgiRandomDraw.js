import React from "react";
import styled from "styled-components";
import imgDrawBox from "../Assets/img/draw.png";
import imgLever from "../Assets/img/lever.png";

const DrawBox = styled.div`
  background: url(${imgDrawBox}) no-repeat;
  background-size: contain;
  height: 224px;
  margin: -1px 98px;
  padding-top: 5px;
  text-align: center;
  .lever {
    display: inline-block;
    width: 88px;
    height: 88px;
    background: url(${imgLever}) no-repeat;
    background-size: contain;
    text-indent: -9999px;
    cursor: pointer;
    transition: ease-in-out 0.5s;
    &:hover {
      transform: rotate(180deg);
    }
  }
  .RandomResult {
    span {
      display: inline-block;
      padding: 10px 15px;
      border-radius: 5px;
      background: linear-gradient(135deg, #ff6bd6, 55%, #53ffea);
      color: #000;
      box-shadow: 0px 8px 5px 0px #5c508d;
      text-shadow: 1px 0 0 white, 0 -1px 0 white, -1px 0 0 white, 0 1px 0 white;
    }
  }
`;

const BbobgiRandomDraw = ({ draw, bbobgis, onRandomDraw }) => {
  return (
    <DrawBox>
      <div className="lever" onClick={() => onRandomDraw(bbobgis)}>
        레버
      </div>
      <div className="RandomResult">{draw !== "" && <span>{draw}</span>}</div>
    </DrawBox>
  );
};

export default BbobgiRandomDraw;

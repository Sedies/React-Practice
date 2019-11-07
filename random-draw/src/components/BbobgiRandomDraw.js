import React from "react";
import styled from "styled-components";
import imgDrawBox from "../Assets/img/draw.png";
import imgLever from "../Assets/img/lever.png";
import imgArrow from "../Assets/img/arrow.png";

const DrawBox = styled.div`
  position: relative;
  background: url(${imgDrawBox}) no-repeat;
  background-size: contain;
  height: 224px;
  margin: -1px 98px;
  text-align: center;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
      color: hotpink;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      color: rgba(1, 42, 203);
    }
  }

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
  .blinkInfo {
    position: absolute;
    top: 15px;
    right: 68px;
    animation: blink 0.4s infinite linear alternate;
    &:after {
      content: "";
      display: block;
      width: 25px;
      height: 25px;
      position: absolute;
      top: 5px;
      left: -14px;
      background: url(${imgArrow}) 0 0 no-repeat;
    }
  }
  .RandomResult {
    padding-top: 10px;
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
      {bbobgis.length > 0 && (
        <span className="blinkInfo">
          뽑기를
          <br />
          돌려주세요!
        </span>
      )}
      <div className="RandomResult">{draw !== "" && <span>{draw}</span>}</div>
    </DrawBox>
  );
};

export default BbobgiRandomDraw;

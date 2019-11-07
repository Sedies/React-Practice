import React, { useState, useCallback } from "react";
import styled from "styled-components";

const InputTemplate = styled.form`
  margin-bottom: 20px;
  label {
    position: absolute;
    top: 0;
    left: -101%;
  }

  input {
    width: 280px;
    border: 4px solid rgba(1, 42, 203);
    border-radius: 30px;
    padding: 10px;
  }

  input::placeholder {
    font-size: 1.3rem;
    text-align: center;
  }
`;

const BbobgiInput = ({ onInsert, inputRef }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <InputTemplate onSubmit={onSubmit}>
      <label htmlFor="menuInput">메뉴를 적고 엔터를 누르세요!</label>
      <input
        placeholder="메뉴를 적고 엔터를 누르세요!"
        value={value}
        onChange={onChange}
        id="menuInput"
        ref={inputRef}
      />
    </InputTemplate>
  );
};

export default BbobgiInput;

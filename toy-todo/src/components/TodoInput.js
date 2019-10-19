import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const Form = styled.form`
  display: flex;
  & input {
    display: flex;
    flex: 1;
    box-sizing: border-box;
    padding: 0.5rem;
    border: 0 none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background: #fff;
  border: 0 none;
  font-size: 1.5rem;
  line-height: 1;
  ${props => props.color && `color:${props.color}`};
`;

const TodoInput = ({ onInsert, colorCheck }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <Form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 추가하세요"
        value={value}
        onChange={onChange}
      />
      <Button color={colorCheck}>
        <MdAdd />
      </Button>
    </Form>
  );
};

export default TodoInput;

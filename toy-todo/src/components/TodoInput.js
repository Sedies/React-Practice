import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const Button = styled.button``;

const TodoInput = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <input
        placeholder="할 일을 추가하세요"
        value={value}
        onChange={onChange}
      />
      <Button>
        <MdAdd />
      </Button>
    </div>
  );
};

export default TodoInput;

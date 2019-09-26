import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('까꿍');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, []);

  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangeNickname} />
      <div>이름: {name}</div>
      <div>닉네임: {nickname}</div>
    </div>
  );
};

export default Info;

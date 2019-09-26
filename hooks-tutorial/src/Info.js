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
  }, []); //두번째 파라미터로 빈배열을 넣으면 마운트완료후 최초 한번만 실행되고, 업데이트 추적이 되지 않는다. 만약 배열안에 props나 state에서 관리하는 상태값을 넣으면 해당하는 내용을 추척하여 업데이트한다. return함수는 언마운트때만 실행 하고 싶다면 두번째 파라미터에 빈배열을 넣어주면 된다.

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

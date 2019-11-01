import React, { useState } from 'react';

const RadioTest = () => {
  // const []
  const clicked = e => {
    // e.target.value
    console.log(e.target.value);
  };
  return (
    <>
      <input
        type="radio"
        name="stupidRadio"
        value="blue"
        onClick={e => clicked(e)}
        checked
      />
      <input
        type="radio"
        name="stupidRadio"
        value="red"
        onClick={e => clicked(e)}
      />
      <input
        type="radio"
        name="stupidRadio"
        value="pink"
        onClick={e => clicked(e)}
      />
      <input
        type="radio"
        name="stupidRadio"
        value="green"
        onClick={e => clicked(e)}
      />
    </>
  );
};

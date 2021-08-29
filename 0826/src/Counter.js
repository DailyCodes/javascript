import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    console.log('증가');
    setCount(count + 1);
  }

  const onDecrease = () => {
    console.log('감소');
    setCount(count - 1);
  }

  return (
    <div>
      <p>현재 카운트는 {count} 입니다.</p>
      <button onClick={onIncrease}>증가!</button>
      <button onClick={onDecrease}>감소!</button>
    </div>
  );
}

export default Counter;
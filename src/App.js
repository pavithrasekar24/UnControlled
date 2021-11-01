import React from 'react';
import './style.css';
import { useState, useRef } from 'react';

function UnControlledComponent() {
  const _name = useRef(0);
  const [isShow, setIsShow] = useState(false);
  let handleClick = () => {
    console.log(_name, _name.current, _name.current.value);
    // setIsShow(true);
  };
  return (
    <div>
      <h1> Un ControlledComponent</h1>
      <p>using ref and useRef {_name.current.value}</p>
      <input type="text" ref={_name} />
      <button onClick={() => handleClick()}>Get</button>
    </div>
  );
}

function ControlledComponent() {
  const [username, setUserName] = useState('');
  let handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <h1>ControlledComponent</h1>
      <h2>Can't change if we using state</h2>
      <p>using setState {username}</p>
      <input type="text" value={username} onChange={(e) => handleChange(e)} />
    </div>
  );
}

export { ControlledComponent, UnControlledComponent };

import React, { useState } from 'react';
import Items from './Items';
import View from './View';


function AApp() {
  const [show, setShow] = useState(true);

  const change = (a) => {
    setShow(a);
  };

  return (
    <div>
      
      {show === true ? <Items show={show} change={change} /> : <View show={show} change={change} />}
    </div>
  );
}

export default AApp;

import React, { useState } from 'react';

function DynamicCart() {
  const [cartCount, setCartCount] = useState(0);
  const [carts, setCarts] = useState([]);

  const addNewCart = () => {
    setCartCount(cartCount + 1);
    const newCart = (
      <div key={cartCount} className="cart shadow-lg">
        <img src={`https://picsum.photos/200/100?random=${cartCount}`} alt={`Cart ${cartCount}`} />
        <h3>Cart {cartCount}</h3>
        <p>To build an entire app with React, we recommend a full-stack React framework</p>
      </div>
    );
    setCarts([...carts, newCart]);
  };

  return (
    <div>
      <button onClick={addNewCart}>Add New Cart</button>
      <div id="cartContainer"> {carts}</div>
    </div>
  );
}

export default DynamicCart;

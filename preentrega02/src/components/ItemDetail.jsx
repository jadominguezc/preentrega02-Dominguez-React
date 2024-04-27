import React from 'react';
import '../css/itemDetail.css';

const ItemDetail = ({ id, name, description, category, price, picture }) => {
  return (
    <div className="item-detail">
            
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{id}</p>
      <p>{category}</p>
      <p>{price}</p>
      <img src={picture} alt={name} />
    </div>
  );
}

export default ItemDetail;

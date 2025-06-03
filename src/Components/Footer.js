import React from 'react'
import { useContext } from 'react'
import { Itemcontex } from '../contex/Cartcontexr';
const Footer = (props) => {
  const itemstate=useContext(Itemcontex);
  console.log("item",itemstate);
  
const handleRemoveFromCart = () => {
    const updatedItems = itemstate.item.filter(
      (item, index) => !(item.name === props.name && item.price === props.price && index === itemstate.item.findIndex(i => i.name === props.name && i.price === props.price))
    );
    itemstate.setItem(updatedItems);
  };

  return (

    <div >
      <h2>{props.name}</h2>
      <h4>Price:${props.price} </h4>
      <button className='inc' onClick={()=>itemstate.setItem([...itemstate.item,{name:props.name,price:props.price}])}>Add to Cart</button>
      <button className='dec' onClick={handleRemoveFromCart}>Remove cart</button> 
     
      
    </div> 

  )
}

export default Footer

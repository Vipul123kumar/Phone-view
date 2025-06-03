import React, { useContext } from 'react'
import { Itemcontex } from '../contex/Cartcontexr'
const Cart = () => {
    const itemstate=useContext(Itemcontex);
    const total=itemstate.item.reduce((a,b)=>
        a+b.price,0
    )
 return (
    <div>
       <h1>Cart</h1>
       {itemstate &&
       itemstate.item.map((item)=>
    (
        <li>{item.name}-${item.price}</li>
    ))

       }
        
      
       <h5>Totala Bill-${total}</h5>
    </div>
  )
}

export default Cart

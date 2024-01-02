import React, { useContext } from 'react'
import { ShoppingContext } from './ShoppingContext'
import "../css/cart.css"
const Cart = () => {
    const{cart=[],updateCartItem,decCartItem,delItem,delAll}=useContext(ShoppingContext);
  return (
    <>
    <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Image</th>
        <th>Title</th>
        <th>quantity</th>
        <th>Price</th>
        <th>All</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {cart.length > 0 ? (
cart.map((item) => (
<tr key={item.id}>
<td>{item.id}</td>
<td>
<img src={item.img} alt={item.title} />
</td>
<td>{item.title}</td>
<td>
<span
className="btn btn-success"
onClick={() => updateCartItem(item)}
>
+
</span>
<span className="quantity">{item.quantity}</span>
<span
className="btn btn-danger"
onClick={() => decCartItem(item)}
>
-
</span>
</td>
<td>{item.price}.00$</td>
<td className="all-price">{item.price * item.quantity}</td>
<td>
<button onClick={() => delItem(item.id)}>
Delete
</button>
</td>
</tr>
))
) : (
<tr>
<td colSpan="7">Your cart is empty</td>
</tr>
)}

    </tbody>
  </table>
     <div className="side-bottom">
     <button className="btn btn-danger " onClick={delAll}>
       Delete All
     </button>
   </div>
   </>
  )
}

export default Cart
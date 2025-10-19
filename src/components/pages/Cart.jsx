import"../../css/Cart.css";
import React from "react";
import {useCartContext} from "../../contexts/ProductContext.jsx";

// /* logic: when user clicks add to cart on product page, calls addtocart(prod)
// context adds item to array, and updates price (totalprice in context)
//  */

function Cart(){
//     const { cart, totalPrice } = useCartContext();

//     const totalItems = cart.reduce((sum, item) => sum +item.quantity, 0);

//     if (cart.length === 0) {
//       return (
//         <div className="checkout-empty">
//           <h2>Your cart is empty 🛒</h2>
//           <p>Browse our shop and add some items!</p>
//         </div>
//       );
//     }
  
//     return (
//       <div className="checkout-page">
//         <h2>Basket({totalItems} {totalItems ===1? "item":"items}))</h2>
  
//         <div className="checkout-items">
//           {cart.map((item) => (
//             <CartItem key ={item.id} item={item}/>
//           ))}
//           </div>
//               <img src={item.image} alt={item.name} className="checkout-img" />
//               <div className="checkout-details">
//                 <h3>{item.name}</h3>
//                 <p>Price: ${item.price}</p>
//                 <p>Quantity: {item.quantity}</p>
  
//                 <div className="checkout-buttons">
//                   <button onClick={() => decreaseQuantity(item.id)}>–</button>
//                   <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
  
//         <div className="checkout-summary">
//           <h3>Total: ${totalPrice.toFixed(2)}</h3>
//           <button className="btn-checkout">Proceed to Checkout</button>
//         </div>
//       </div>
//     );    

}

export default Cart
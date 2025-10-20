import { useCartContext } from "../../contexts/CartContext";
import "../../css/Cart.css"
function CartPage() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, totalPrice, checkout } = useCartContext();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={`http://localhost:8081/images/${item.image}`} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className="cart-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3 className = "cart-total">  Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={checkout}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;

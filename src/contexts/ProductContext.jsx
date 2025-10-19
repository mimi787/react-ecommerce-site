import {createContext, useState, useContext, useEffect} from "react"
//creates context object =(components can share values)

const CartContext = createContext()//stores all cart data

export const useCartContext = ()=> useContext(CartContext)//custom hook for cart context

//wraps around everything in app that needs access to cart
export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    
    useEffect(() =>{
        const storedCart = localStorage.getItem("cart")//load cart data from localStorage
        if (storedCart) setCart(JSON.parse(storedCart))
    }, [])
    
    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart))//when cart changes, save new version to localstorage
    },[cart])

    const addToCart = (item) =>{
        const existingItem = cart.find(cartItem => cartItem.id === item.id)
        if (existingItem){
            setCart(prevCart =>
                prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ?{...cartItem, quantity:cartItem.quantity +1}
                        :cartItem
                    )
                    
                )
        }else{
            setCart(prevCart => [...prevCart,{...item, quantity:1}])
        }
        window.alert(`${item.name} has been added to cart`);
    }
    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId))
    }

    const decreaseQuantity = (itemId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0) // removes if 0
        )
    }

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )
    const value = {
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        totalPrice
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

    }

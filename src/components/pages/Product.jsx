import"../../css/ProductPage.css"
import { useParams } from "react-router-dom";//for url
import { useCartContext} from "../../contexts/CartContext.jsx";
import {useState, useEffect} from "react";//react hook for state


function Product(){
    const {id} = useParams(); /*gives access to id parameter for specific page*/

    const { addToCart} = useCartContext();
//  sample data
    // const products = {
    //     1: { name: "Beige Skirt", image: skirt1, price: "25.00" },
    //     2: { name: "Brown Skirt", image: skirt2, price: "28.00" },
    //     3: { name: "Grey Skirt", image: skirt3, price: "30.00" },
    //     4: { name: "White Skirt", image: skirt4, price: "27.00" },
    //   };
//
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch(`http://localhost:8081/products/${id}`)
        .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
        })
        .then(data => {
        setProduct(data);
        setLoading(false);
        })
        .catch(err => {
        setError(err);
        setLoading(false);
        });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    if (!product) return <p>Product not found</p>;

      
    return(
        <div className="product-page">
            <div className="product-card">
                <img src={`http://localhost:8081/images/${product.image}`} alt = {product.name} className="product-image"/>
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{`$`}{product.price}</p>
                <div className="product-buttons">
                    <button className="btn-add" onClick={() => addToCart(product)}>Add to Cart</button>
                    <button className="btn-buy">Buy Now</button>
                </div>
            </div>
        </div>
    );

}

export default Product
import"../../css/ProductPage.css"
import skirt1 from "../../assets/beigemaxi.jpeg";
import skirt2 from "../../assets/brownmaxi.jpeg";
import skirt3 from "../../assets/greymaxi.jpeg";
import skirt4 from "../../assets/whitemaxi.jpeg";
import { useParams } from "react-router-dom";

function Product(){
    const {id} = useParams() /*gives access to id parameter for specific page*/
//  sample data
    const products = {
        1: { name: "Beige Skirt", image: skirt1, price: "$25.00" },
        2: { name: "Brown Skirt", image: skirt2, price: "$28.00" },
        3: { name: "Grey Skirt", image: skirt3, price: "$30.00" },
        4: { name: "White Skirt", image: skirt4, price: "$27.00" },
      };

    const product = products[id];

    return(
        <div className="product-page">
            <div className="product-card">
                <img src={product.image} alt = {product.name} className="product-image"/>
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price}</p>
                <div className="product-buttons">
                    <button className="btn-add">Add to Cart</button>
                    <button className="btn-buy">Buy Now</button>
                </div>
            </div>
        </div>
    );

}

export default Product
import ItemCard from "../ItemCard";
import "../../css/Shop.css"
import skirt1 from "../../assets/beigemaxi.jpeg";
import skirt2 from "../../assets/brownmaxi.jpeg";
import skirt3 from "../../assets/greymaxi.jpeg";
import skirt4 from "../../assets/whitemaxi.jpeg";


function Shop (){
    const products = [
        { id: 1, name: "Beige Skirt", image: skirt1},
        { id: 2, name: "Brown Skirt", image: skirt2},
        { id: 3, name: "Grey Skirt", image: skirt3},
        { id: 4, name: "White Skirt", image: skirt4},
    ];

    return(
        <div className="shop-page">
            <h1 className="shop-title">Shop</h1>
                <div className="shop-grid">
            {products.map((product) => (
            <ItemCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
            />
            ))}
        </div>
        </div>
    )

    
}

export default Shop
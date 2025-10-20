import "../css/ItemCard.css"
import { Link } from "react-router-dom";

function ItemCard({ id, name,price, image}){

    return( 
        <div className="item-card">
            <Link to={`/product/${id}`}>
                <img src={image} alt={name} className="item-image"/>
                <h3 className="item-name">{name}</h3>
                <h3 className="item-price">{`$`}{price}</h3>
            </Link>
    </div>
    );
}
export default ItemCard
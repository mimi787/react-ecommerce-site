import "../css/ItemCard.css"
import { Link } from "react-router-dom";

function ItemCard({ id, name, image}){

    return( 
        <div className="item-card">
            <Link to={`/product/${id}`}>
                <img src={image} alt={name} className="item-image"/>
            </Link>
    </div>
    );
}
export default ItemCard
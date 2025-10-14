import {Link} from "react-router-dom";
import pretty from "../../assets/home-image.jpeg";
import"../../css/Home.css"

function Home(){
    return (
        <div className="home-container">
            <img src={pretty} alt="home-image" className="home-image"/>
            <Link to="/shop" className="home-shop-btn">
                Shop Now
            </Link>
        </div>
    );

}

export default Home
import ItemCard from "../ItemCard";
import "../../css/Shop.css"
import {useState, useEffect} from "react";//react hook for state

function Shop (){//array of skirt components
  
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);//check to see if data is being lloaded in
    const [error, setError] = useState(null);
    useEffect(()=>{
        const url = "http://localhost:8081/products";
        fetch(url)
        .then(res =>{
            if (!res.ok) throw new Error("Network response error");
            return res.json();//parse though product data
        })
        .then((data)=>{
            setProducts(data);
            setLoading(false);
        })
        .catch(err => {
            console.log("Product info retrieval failed", err);
            setError(err);
            setLoading(false);
        });
    }, []);
    if (loading) return <p>Loading items</p>;
    if (error) return <p> Error loading items</p>;
    if (products.length ===0) return<p>Out of Stock</p>;
    return(
        <div className="shop-page">
            <h1 className="shop-title">The Collection</h1>
                <div className="shop-grid">
                    {products.map((product)=>(
                        <ItemCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={`http://localhost:8081/images/${product.image}`}/>
                    ))}
            
                </div>
        </div>
    )/*map loops through product array, and passes them into Itemcard so they are displayed. the key helps 
        keep track of the items when products array is updated*/

    
}

export default Shop
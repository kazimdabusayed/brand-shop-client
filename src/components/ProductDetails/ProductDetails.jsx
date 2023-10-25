import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";



const ProductDetails = () => {
    
    const {user} = useContext(AuthContext);
    const email = user?.email;

    const product = useLoaderData();
    const { name, brandName, type, rating, description, price, photo } = product;
    console.log(name);
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;
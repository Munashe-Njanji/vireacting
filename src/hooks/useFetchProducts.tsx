import { useEffect, useState } from "react"
import Product from "../types/Product"

const useFetchProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fecthProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data: Product[] = await response.json();
                setProducts(data);
                setLoading(false)
            } catch (error) {
                console.error('Failed to fetch products', error);
                setLoading(false);
            }
        }
        fecthProducts();
    }, [])

    return {products, loading};
}


export default useFetchProducts;
import { createContext, ReactNode, useContext } from "react";
import Product from "../types/Product";
import useFetchProducts from "../hooks/useFetchProducts";

interface ProductContextProps {
    products: Product[];
    loading: boolean
}

const ProductContext = createContext<ProductContextProps>({
    products: [],
    loading: false,
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const { products, loading } = useFetchProducts();

    return (
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => useContext(ProductContext);
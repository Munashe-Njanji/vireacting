// pages/Home.tsx
import React, { lazy, Suspense as ReactSuspense } from 'react';
import { useProductContext } from '../context/ProductContext';
import SuspenseFallback from '../components/Suspense';
const ProductList = lazy(() => import('../components/Product/ProductList'));

const Home: React.FC = () => {
    const { products, loading } = useProductContext();

    return (
        <main className="bg-gray-700 min-h-screen p-8">
            {loading ? (
                <SuspenseFallback />
            ) : (
                <ReactSuspense fallback={<SuspenseFallback />}>
                    <ProductList products={products}/>
                </ReactSuspense>
            )}
        </main>
    );
};

export default Home;

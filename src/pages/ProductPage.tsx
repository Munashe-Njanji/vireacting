import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading } = useProductContext();
  const product = products.find(p => p.id === Number(id));

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-gray-600 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-white relative overflow-hidden group">
          <img className="w-full h-64 object-contain object-center group-hover:scale-110 transition-transform duration-300" src={product.image} alt={product.title} />
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-200 mb-4">{product.description}</p>
          <p className="text-gray-300 text-xl font-semibold mb-2">Category: {product.category}</p>
          <p className="text-gray-100 text-xl font-semibold">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import React from 'react';
import Product from '../../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927C9.24 2.599 9.76 2.599 9.951 2.927L12.4 7.657C12.532 7.897 12.756 8.043 13.007 8.055L18.004 8.267C18.445 8.287 18.635 8.807 18.31 9.091L14.378 12.498C14.16 12.684 14.074 12.991 14.169 13.258L15.585 17.698C15.719 18.105 15.306 18.478 14.947 18.287L10.764 16.07C10.538 15.945 10.262 15.945 10.036 16.07L5.853 18.287C5.494 18.478 5.081 18.105 5.215 17.698L6.631 13.258C6.726 12.991 6.641 12.684 6.422 12.498L2.49 9.091C2.166 8.807 2.355 8.287 2.796 8.267L7.793 8.055C8.043 8.043 8.267 7.897 8.399 7.657L10.848 2.927Z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-gray-600 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="bg-white h-48 overflow-hidden relative border-2 border-gray-600">
        <img className="w-full h-full object-contain" src={product.image} alt={product.title} />
      </div>
      <div className="p-4">
        <h2 className="text-gray-400 text-lg font-semibold">{product.title}</h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-100">${product.price}</p>
          <div className="flex items-center space-x-1">
            {renderRatingStars(Math.round(product.rating.rate))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

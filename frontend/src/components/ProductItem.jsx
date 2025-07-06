import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden border border-gray-300">
        <img
          className="w-full h-72 object-cover hover:scale-110 transition ease-in-out"
          src={image && image[0] ? image[0] : ''}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}{price}
      </p>
    </Link>
  );
};

export default ProductItem;

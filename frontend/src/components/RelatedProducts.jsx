import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductdItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProd, setRelatedProd] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => item.category === category);
      productsCopy = productsCopy.filter((item) => item.subCategory === subCategory);
      setRelatedProd(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-2xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProd.map((item, index) => (
          <ProductdItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            className="cursor-pointer w-[24%] sm:w-full sm:mb-3 flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

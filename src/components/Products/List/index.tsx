import React from 'react';
import { goods } from '@/data/products';
import ProductCard from '@/components/Card/ProductCard';

const ProductList = () => {
  return (
    <>
      {goods.map((item) => {
        if (item.new) {
          return (
            <ProductCard
              key={item.id}
              isNew={item.new}
              title={item.title}
              price={item.price}
            />
          );
        }
      })}
    </>
  );
};

export default ProductList;

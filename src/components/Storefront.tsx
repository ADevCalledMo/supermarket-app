import React from "react";
import Product from "./Product";

type StorefrontProps = {
  handleSetCount: Function;
  count: number;
};

const Storefront = ({ handleSetCount, count }: StorefrontProps) => {
  console.log(handleSetCount, count);
  return (
    <div className="storefront">
      <Product />
    </div>
  );
};

export default Storefront;

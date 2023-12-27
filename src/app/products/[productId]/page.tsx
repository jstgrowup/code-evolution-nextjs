import React from "react";

function ProductDetail({ params }: { params: { productId: string } }) {
  return (
    <div>
      <h1>{params.productId}</h1>
    </div>
  );
}

export default ProductDetail;

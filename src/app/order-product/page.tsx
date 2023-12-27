"use client"
import React from "react";
import { useRouter } from "next/navigation";
function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default OrderProduct;

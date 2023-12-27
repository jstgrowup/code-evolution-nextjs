import React from "react";

function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h1>
      productID is {params.productId} review is {params.reviewId}{" "}
    </h1>
  );
}

export default ReviewDetails;

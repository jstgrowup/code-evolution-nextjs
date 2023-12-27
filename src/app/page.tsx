import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div>
      <Link href={"/blog"}>Blog</Link>
      <Link href={`/products/1`}>Products</Link>

      Home
    </div>
  );
}

export default Home;

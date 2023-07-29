import React from 'react'

export default function ProductById() {
  return (
    <div>ProductById</div>
  )
}

export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/products?id=${params.productId}`);
    const data = await res.json();
    return {
      props: {
        product: data,
      },
    };
  };

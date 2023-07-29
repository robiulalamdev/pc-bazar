import React from 'react'

export default function CateByProduct({product}) {
    console.log(product)
  return (
    <div>CateByProduct</div>
  )
}



export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/products/${params.cateId}`);
    const data = await res.json();
    return {
      props: {
        product: data,
      },
    };
  };
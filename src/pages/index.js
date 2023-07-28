import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })


import banner1 from "../assets/images/banner1.jpg"
import RootLayout from '@/layout/RootLayout'

export default function Home({categories}) {
  console.log(categories)
  return (
    <main>
      <Image className='w-full h-96' src={banner1} />
    </main>
  )
}



Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


// for server side rendering (SSG) with json-server data
export const getStaticProps = async () => {
  const res =await  fetch(`https://pc-bazar.vercel.app/api/categories/all-categories`);
  const data =await  res.json();
  return {
    props: {
      categories: data,
    }
  };
}; 
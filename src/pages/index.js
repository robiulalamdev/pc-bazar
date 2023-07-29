import { Inter } from 'next/font/google'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })
import banner1 from "../assets/images/banner1.jpg"
import Navbar from '@/components/shared/Navbar'

export default function Home({categories}) {
  console.log(categories)
  return (
    <main>
      <Navbar categories={categories?.data} />
      <Image className='w-full h-96' src={banner1} alt="banner" />
    </main>
  )
}


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
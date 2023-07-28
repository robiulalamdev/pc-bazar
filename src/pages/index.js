import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })


import banner1 from "../assets/images/banner1.jpg"

export default function Home() {
  return (
    <main>
      <Image className='w-full h-96' src={banner1} />
    </main>
  )
}

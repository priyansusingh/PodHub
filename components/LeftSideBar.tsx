import Image from 'next/image'
import React from 'react'
import logo from '../public/icons/logo.svg'
import Link from 'next/link'


const LeftSideBar = () => {
  return (
   <section className='left_sidebar'>
    <nav className='flex flex-col gap-6'>
        <Link href="./" className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
        <Image src={logo} alt='log' width={23} height={27}></Image>
        <h1 className='text-24 font-extrabold text-white max-lg:hidden'>TechCast</h1>
        </Link>
    </nav>
   </section>
  )
}

export default LeftSideBar
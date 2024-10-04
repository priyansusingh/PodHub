"use client"
import Image from 'next/image'
import React from 'react'
import logo from '../public/icons/logo.svg'
import Link from 'next/link'
import { LeftSidebarLinks } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'



const LeftSideBar = () => {

   const pathName = usePathname();
   const route = useRouter();
   
   console.log(route)
   
   return (
   <section className='left_sidebar'>
    <nav className='flex flex-col gap-6'>
        <Link href="./" className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
        <Image src={logo} alt='log' width={23} height={27}></Image>
        <h1 className='text-24 font-extrabold text-white max-lg:hidden'>TechCast</h1>
        </Link>
        {LeftSidebarLinks.map(({label,route, imgURL})=>{

          const isActive = pathName === route || pathName.startsWith(`${route}/`)

            return <Link href={route} key={label} className={cn('flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start', {'bg-nav-focus border-r-4 border-orange-600':isActive})}>
              <Image src={imgURL} alt={label} width={24} height={24}/>
              <p>{label}</p>
            </Link>
        })}
    </nav>
   </section>
  )
}
export default LeftSideBar
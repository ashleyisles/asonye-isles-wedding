import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar () {
  const router = useRouter()

  return (
    <div className={`${router.pathname === '/' ? 'bg-transparent' : 'bg-white shadow'} fixed top-0 left-0 w-full flex items-center justify-between px-12 py-5`}>
      <Link href="/"><h5 className={`cursor-pointer text-2xl font-bold ${router.pathname === '/' ? 'text-white' : 'text-black'} tracking-tight`}>Ashley<span className={`font-black ${router.pathname === '/' ? 'text-white' : 'text-blue-600'}`}>&amp;</span>Enyi</h5></Link>
      <div className="grid gap-8 grid-flow-col items-center">
        <Link href="/our-story"><a className={`cursor-pointer mx-4 transform hover:-translate-y-1 ease-in-out duration-300 ${router.pathname === '/' ? 'text-white' : 'text-black'}`}>Our Story</a></Link>
        <Link href="/registry"><a className={`cursor-pointer mx-4 transform hover:-translate-y-1 ease-in-out duration-300 ${router.pathname === '/' ? 'text-white' : 'text-black'}`}>Registry</a></Link>
        <Link href="/accommodations"><a className={`cursor-pointer mx-4 transform hover:-translate-y-1 ease-in-out duration-300 ${router.pathname === '/' ? 'text-white' : 'text-black'}`}>Accommodations</a></Link>
        <Link href="/rsvp"><button className={`rounded-md leading-10 ${router.pathname === '/' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}  px-4 text-base transform ease-in-out duration-100 hover:shadow-lg hover:-translate-y-1`}>RSVP</button></Link>
      </div>
    </div>
  )
}

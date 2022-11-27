import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className="flex items-center space-x-1">
      <Image src='/favicon.ico' width='40' height='40' alt='icon' />
      <h1 className="text-primary hidden sm:block text-2xl font-bold">OurPicture</h1>
    </div>
  )
}

export default Logo

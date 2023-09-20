import Link from 'next/link'
import React from 'react'


const Button = ({children, href}:any) => {
  return (
    <>
    <Link href={href ? href : "/member"}>
      <button className="bg-red text-xs font-inter text-white py-3 px-10 uppercase font-semibold">
          {children}
      
      </button>
    </Link>
    </>
  )
}

export default Button
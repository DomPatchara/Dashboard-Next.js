import React from 'react'
import Link from 'next/link'

interface CardProp {
    title: string
    desc: string
    emoji : any
    link : string
    bgcolor: string
    hoverbg: string
}

const Card = ({title, desc, emoji, link, bgcolor, hoverbg}: CardProp) => {
  return (
    <Link 
        className={`${bgcolor} ${hoverbg} p-6 rounded-xl
        shadow-md hover:shadow-2xl transition-all duration-200 ease-in-out transform hover:scale-105`}
        href={`/dashboard/${link}`}
    >
        <div className='flex items-center justify-between '>
            <h2 className='text-xl font-semibold text-blue-800'>{title}</h2>
            <span className='text-xl'>{emoji}</span>
        </div>

        <p className='text-gray-700 mt-2'>
            {desc}
        </p>
    </Link>
  )
}

export default Card
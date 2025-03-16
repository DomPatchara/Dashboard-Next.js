import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6 '> 
      <div className='text-center'>
        
        <h1 className='text-5xl font-bold text-gray-800 mb-6'> 
          Welcome to the Dashboard App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your tasks, track analystics, and stay organized with our 
          powerful dashboard
        </p>

        <Link
          className='inline-flex items-center justify-center bg-blue-700 px-6 py-4 rounded-3xl
          text-white font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl'
          href='/dashboard'
        >
          Go to Dashboard
        </Link>

      </div>
    </div>
  )
}

export default Home
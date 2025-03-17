import React from 'react'
import Link from 'next/link'

const Users = () => {
  return (
    <div className='bg-container'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Users</h1>
        <p className="text-lg text-gray-600 mb-8">
          Mange your users here. You can view detailed information or browse a list od users.
        </p>

        {/** User-relate section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Link
            href='/dashboard/users/users-details'
            className='bg-teal-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow'  
          >
            <h2 className='text-xl font-semibold text-teal-800 mb-2'>
              User Details
            </h2>
            <p className='text-gray-600'>
              View detailes information about each user in your system
            </p>
          </Link>

          <Link
            href='/dashboard/users/users-list'
            className='bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow'  
          >
            <h2 className='text-xl font-semibold text-orange-800 mb-2'>
              User List
            </h2>
            <p className='text-gray-600'>
              View detailes information about each user in your system
            </p>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Users
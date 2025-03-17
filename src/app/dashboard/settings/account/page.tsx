import ActionBtn from '@/components/dashboard/ActionBtn'
import React from 'react'

const AccountSettings = () => {
  return (
    <div className='bg-container'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>Account Settings</h1>

        {/**Profile Information */}
        <div className='mb-8'>
          <h2 className='font-semibold text-xl text-gray-700 mb-4'>
            Profile Information
          </h2>

          <div className='space-y-4'>

            <div>
              <label className='block text-sm font-medium text-gray-600 mb-2'>
                Name
              </label>
              <input 
                type="text" 
                defaultValue="Dom Patchara"
                className='block w-full rounded-lg border-gray-300 border-1  px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-600 mb-2'>
                Email
              </label>
              <input 
                type="email" 
                defaultValue="Patcharayk@gmail.com"
                className='block w-full rounded-lg border-gray-300 border-1  px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600'
              />
            </div>

          </div>
        </div>

        {/**Security */}
        <div className='mb-8'>
          <h2 className='font-semibold text-xl text-gray-700 mb-4'>
            Security
          </h2>

          <div className='space-y-4'>

            <div>
              <label className='block text-sm font-medium text-gray-600 mb-2'>
                Password
              </label>
              <input 
                type="text" 
                placeholder='Enter new Password'
                className='block w-full rounded-lg border-gray-300 border-1  px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-600 mb-2'>
                Confirm Password
              </label>
              <input 
                type="text" 
                placeholder='Confirm new password'
                className='block w-full rounded-lg border-gray-300 border-1  px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600'
              />
            </div>

          </div>
        </div>

        {/**Action Setting */}
        <ActionBtn/>
             
      </div>
    </div>
  )
}

export default AccountSettings
import React from 'react'
import ActionBtn from '@/components/dashboard/ActionBtn'

const ProfileSetting = () => {
  return (
    <div className='bg-container'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>
          Profile Settings
        </h1>

        {/* Profile Picture */}
        <section className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            Profile Picture
          </h2>

          <div className="flex item-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300 border-1">
              <img 
                src='/profile.png'
                alt=""
                className='w-full h-full rounded-full object-cover' 
              />
            </div>
          </div>

          <div>
            <button className='px-6 py-2 mt-5 text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors'>
              Change Picture
            </button>
          </div>
        </section>

        {/**Profile Information Section */}
        <section className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            Profile Infomation
          </h2>

          <div className="space-y-4">
            {/** Full Name */}
            <div>
              <label className='block text-sm font-medium text-gray-600'>Full Name</label>
              <input 
                type="text" 
                defaultValue="Dom Patchara" 
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
                shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/** User Name */}
            <div>
              <label className='block text-sm font-medium text-gray-600'>
                Username
              </label>
              <input 
                type="text" 
                defaultValue="Dom_Patchara" 
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
                shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/** Email Address */}
            <div>
              <label className='block text-sm font-medium text-gray-600'>
                Email Address
              </label>
              <input 
                type="email" 
                defaultValue="patcharayk@gmail.com" 
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
                shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/**Action Setting */}
            <ActionBtn/>
            
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProfileSetting
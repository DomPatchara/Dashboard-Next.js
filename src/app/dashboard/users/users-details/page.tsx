import React from 'react'
import ActionBtn from '@/components/dashboard/ActionBtn'

const UserDetails = () => {

  const user = {
    name: "Dom Patchara",
    email: "Patcharayk@gmail.com",
    role: "Admin",
    status: "Active",
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore minus eum sit, tempore, minima consequuntur natus numquam aspernatur provident modi autem voluptatum hic incidunt enim nesciunt quisquam. Beatae, nesciunt officiis!",
    profilePicture: '/profile.png',
    activities: [
      {id:1, desc: "Update password", timestamp: "2025-02-10" },
      {id:2, desc: "Changed email address", timestamp: "2025-01-25" },
      {id:3, desc: "Logged in from a new device", timestamp: "2025-01-25" },
    ]
  }

  return (
    <div className='bg-container'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8'>

        <div className='flex items-center mb-8'>
          <img 
            src={user.profilePicture} 
            alt="Profile" 
            className='w-20 h-20 rounded-full object-cover mr-6'
          />
          <div className='space-y-1'>
            <h1 className='text-3xl font-bold text-gray-800'>{user.name}</h1>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.role}</p>
            <p 
              className={`text-sm mt-2 ${
                          user.status === 'Active' 
                          ? 'text-green-500' 
                          : 'text-red-500'}
                        `}
            >
              Status: {user.status}
            </p>
          </div>
        </div>

        {/** Bio Section */}
        <div className="mb-8">
          <h2 className='font-extrabold text-gray-700 mb-4 text-xl'>
            About
          </h2>
          <p className='text-gray-600'>{user.bio}</p>
        </div>

        {/*Activities Timeline */}
        <div className="mb-8">
          <h2 className='font-extrabold text-gray-700 mb-4 text-xl'>
            Recent Activities
          </h2>
          <ul className="space-y-4">
            {user.activities.map((activity)=> (
              <li key={activity.id} className='flex items-center space-x-4'>

                <div className='bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center'>
                  <span>A</span>
                </div>

                <div>
                  <p className='text-gray-700'>{activity.desc}</p>
                  <p className='text-sm text-gray-500'>{activity.timestamp}</p>
                </div>

              </li>
            ))}
          </ul>

          {/** Action Section */}
          <ActionBtn/>
        </div>
      </div>
    </div>
    
  )
}

export default UserDetails
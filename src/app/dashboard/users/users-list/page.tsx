import React from 'react'

const UserList = () => {

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.do@eample.com",
      role: "Admin",
      status: "Active"
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.Smito@eample.com",
      role: "Editor",
      status: "Inactive"
    },
    {
      id: 3,
      name: "Sambuck",
      email: "Sambuck@eample.com",
      role: "User",
      status: "Suspended"
    },
    {
      id: 4,
      name: "Emily Jonson",
      email: "Emily@eample.com",
      role: "Admin",
      status: "Active"
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "Browndo@eample.com",
      role: "Editor",
      status: "Inactive"
    },
    {
      id: 6,
      name: "Sarah",
      email: "Sarah@eample.com",
      role: "User",
      status: "Suspened"
    },
  ]

  return (
    <div className='bg-container'>
      <div className='max-w-4xl bg-white rounded-lg p-8 mx-auto shadow-xl'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>
          User List
        </h1>

        {/** Users Table */}
        <div className='overflow-x-auto bg-white shadow-lg rounded-lg'>
          <table className='min-w-full table-auto'>
            <thead className='bg-blue-600 text-white'>
              <tr>
                <th className='py-3 px-4 text-left'>Name</th>
                <th className='py-3 px-4 text-left'>Email</th>
                <th className='py-3 px-4 text-left'>Role</th>
                <th className='py-3 px-4 text-left'>Status</th>
                <th className='py-3 px-4 text-left'>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className='border-t hover:bg-gray-50'>
                  <td className='p-4'>{user.name}</td>
                  <td className='p-4'>{user.email}</td>
                  <td className='p-4'>{user.role}</td>
                  <td className='p-4'>
                    <span className={`${
                      user.status === "Active" 
                      ? 'text-green-500'
                      : user.status === "in-active"
                      ? 'text-yellow-500'
                      : 'text-red-500'}
                    `}>
                      {user.status}
                    </span>
                  </td>
                  <td className='p-4 text-center flex flex-col md:flex-row gap-2.5'>
                    <button className='px-4 py-2 bg-gray-200 rounded-2xl text-gray-600 hover:bg-gray-300'>Edit</button>
                    <button className='px-4 py-2 bg-blue-500 rounded-2xl text-white hover:bg-blue-600'>View</button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserList
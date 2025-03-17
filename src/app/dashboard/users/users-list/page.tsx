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
        <h1>
          User List
        </h1>
      </div>
    </div>
  )
}

export default UserList
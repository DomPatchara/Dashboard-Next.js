import React from 'react'

const ActionBtn = () => {
  return (
    <div className='flex justify-end space-x-4'>
        <button className='px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer'>
            Cancle
        </button>
        <button className='px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer'>
            Save Changes
        </button>
    </div>
  )
}

export default ActionBtn
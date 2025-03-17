import React from 'react'
import Card from '@/components/dashboard/Card'

const Dashboard = () => {
  return (
    <div className='bg-container'>
        <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8'>
            <div className='flex flex-col'>
                <h1 className='text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0'>
                    Dashboard
                </h1>
                <p className='text-lg text-gray-600 mt-3'>
                    Welcome back! Here you can manage your tasks, view analystics, and 
                    make adjustment
                </p>
            </div>

            {/** Dashboard Grid Responsive */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

                {/**Task Card */}
                <Card 
                    title='Tasks' 
                    desc='View. organize, and manage your daily tasks' 
                    emoji='📃'
                    link='tasks'
                    bgcolor='bg-blue-100'
                    hoverbg='bg-blue-200'
                />

                {/**Analytic Card */}
                <Card 
                    title='Analytic' 
                    desc='Gain insights into your performance and trend.' 
                    emoji='📊'
                    link='analytics'
                    bgcolor='bg-green-100'
                    hoverbg='bg-green-200'
                />

                {/**Setting Card */}
                <Card 
                    title='Setting' 
                    desc='Customize and tweak your dashboard settings.' 
                    emoji='⚙️'
                    link='settings'
                    bgcolor='bg-purple-100'
                    hoverbg='bg-purple-200'
                />

                {/**User Card */}
                <Card 
                    title='User' 
                    desc='View and manage your user base.' 
                    emoji='👤'
                    link='users'
                    bgcolor='bg-yellow-100'
                    hoverbg='bg-yellow-200'
                />
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard
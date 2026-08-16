import React from 'react'
import HeadingBadge from '../components/HeadingBadge'
import HeaderText from '../components/HeaderText'

const Screenshots = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white pt-10'>
            <HeadingBadge text='ScreenShots' />
            <HeaderText text1='Designed Screen' text2='By Screen' size='text-4xl' center />
            <p className='text-md font-light my-5 text-gray-500'>A Quick Look at the Cooking App</p>
        </div>
    )
}

export default Screenshots
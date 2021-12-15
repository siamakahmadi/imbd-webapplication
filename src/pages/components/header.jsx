import React from 'react'

export default function header() {
    return (
        <div className='flex justify-between'>
            <div>
                <div className='font-mono'>Welcome</div>
                <div className='font-mono font-bold'>Siamak Ahmadi</div>
            </div>
            <div>
                <img className='w-12 h-12 rounded-full object-cover' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" />
            </div>
        </div>
    )
}

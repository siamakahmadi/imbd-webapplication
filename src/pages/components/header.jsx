import React from 'react'

export default function header() {
    return (
        <div className='flex justify-between'>
            <div>
                <div className='font-mono'>Welcome</div>
                <div className='font-mono font-bold'>Siamak Ahmadi</div>
            </div>
            <div>
                <img className='w-12 h-12 rounded-full' src='../Style/Img/profileimg.jpg' alt="" />
            </div>
        </div>
    )
}

import React from 'react'
import './Style/movie.css'

export default function Movies() {
    return (
        <div>
            <div className='rounded-full w-full h-12 flex border-solid border-2 searchSection'>
                <input type="text" className=' searchInputBg w-full h-full rounded-full ' placeholder='Type Movie Name'/>
                <div className='searchIcon w-24 h-24'>
                    
                </div>
            </div>
        </div>
    )
}

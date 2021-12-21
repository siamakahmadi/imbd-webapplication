import React from 'react'

export default function MovieSinglePage({Title,Summary,Img,Description,Time,Genres,Actors}) {
    return (
        <div>
            <h1>{Title}</h1>
            <h1>{Summary}</h1>
            <h1>{Img}</h1>
            <h1>{Description}</h1>
            <h1>{Time}</h1>
            <h1>{Genres}</h1>
            <h1>{Actors}</h1>

        </div>
    )
}

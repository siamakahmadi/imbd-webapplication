import React from "react";
import {Link} from 'react-router-dom'
export default function MovieCard({ image, title, caption,slug }) {
  return (
    
      <div>
        <Link to={`/single/Movie/${title}`}>
        <div className=" w-44 h-55 rounded-md mr-8 ">
          <div className="w-40 h-55">
            <img
              className=" inset-0 w-full h-full object-cover rounded-xl"
              src={image}
              alt=""
            />
          </div>
          <div className="flex flex-col mt-2">
             <h1 className="text-md font-bold">{title}</h1>
            <p className="text-xs mt-2">{caption}</p>
          </div>
        </div>
        </Link>
      </div>
    
  );
}

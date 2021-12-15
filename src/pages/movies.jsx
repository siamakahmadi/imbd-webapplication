import React from "react";
import "./Style/movie.css";

export default function Movies() {
  return (
    <div>
      <div className="rounded-full w-full h-12 flex border-solid border-2 searchSection">
        <input
          type="text"
          className=" searchInputBg w-full h-full rounded-full "
          placeholder="Type Movie Name"
        />
        <div className="searchIcon w-24 h-24"></div>
      </div>

      <div>
        <div className="flex justify-between mt-4 items-baseline text-red">
          <h1 className="text-lg font-semibold" >Today Shows</h1>
          <span className="text-sm text-blue-600">See More</span>
        </div>
        <div className=" flex scroll  ">
            <div className="bg-indigo-900 w-44 h-auto rounded-md mr-6 w-60 h-70">
                <div className="w-40 h-30 rounded-md">
                    <img className="" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180" alt="" />
                </div>
                <div>
                    <h1> Mscssovie Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
                </div>
            </div>

            <div className="bg-indigo-900 w-44 h-auto rounded-md mr-6">
                <div className="w-40 h-40 rounded-md">
                    <img src="" alt="" />
                </div>
                <div>
                    <h1> Mscssovie Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
                </div>
            </div>

            <div className="bg-indigo-900 w-44 h-auto rounded-md mr-6">
                <div className="w-40 h-40 rounded-md">
                    <img src="" alt="" />
                </div>
                <div>
                    <h1> Mscssovie Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
                </div>
            </div>
        </div>
      </div>


      
    </div>
  );
}

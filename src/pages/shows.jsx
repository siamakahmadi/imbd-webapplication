import React from "react";
import "./Style/movie.css";
import MovieCard from "./components/movieCard";

export default function Movies() {
  return (
    <div>
      <div className="rounded-full w-full h-12 flex border-solid border-2 searchSection">
        <input
          type="text"
          className=" searchInputBg w-full h-full rounded-full "
          placeholder="Type Movie Name"
        />
        <div className="searchIcon w-24 h-24"> </div>
      </div>

      <div>
        <div className="flex justify-between mt-4 items-baseline ">
          <h1 className="sm:text-lg font-semibold">Today TV Shows</h1>
          <span className="sm:text-sm text-blue-600">See More</span>
        </div>



        <div className=" flex scroll w-full mt-4">

          <MovieCard title={"MoonLight"} caption={"A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him."} uri={'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217'}/>
          <MovieCard title={"MoonLight"} caption={"A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him."} uri={'https://maxcdn.icons8.com/app/uploads/2019/05/poster-for-movie.png'}/>
          <MovieCard title={"MoonLight"} caption={"A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him."} uri={'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/169241483/original/af413b406d3cb2eedc149baf2a8b87156d86d56f/make-your-movie-or-short-film-poster.jpg'}/>
          <MovieCard title={"MoonLight"} caption={"A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him."} uri={'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217'}/>
          <MovieCard title={"MoonLight"} caption={"A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him."} uri={'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217'}/>



        </div>
      </div>







      <div>
        <div className="flex justify-between mt-4 items-baseline ">
          <h1 className="text-lg font-semibold">Popular TV Shows</h1>
          <span className="text-sm text-blue-600">See More</span>
        </div>



        <div className=" flex scroll w-full mt-4">

  
        <MovieCard title={"MoonLight"} caption={"A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him."} uri={'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217'}/>

        </div>
        
      </div>

      <div>
        <div className="flex justify-between mt-4 items-baseline ">
          <h1 className="text-lg font-semibold">Trending TV Shows</h1>
          <span className="text-sm text-blue-600">See More</span>
        </div>



        <div className=" flex scroll w-full mt-4">

  
        <MovieCard title={"MoonLight"} caption={"A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him."} uri={'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217'}/>

        </div>
        
      </div>



      <div>
        <div className="flex justify-between mt-4 items-baseline ">
          <h1 className="text-lg font-semibold">Recently TV Shows</h1>
          <span className="text-sm text-blue-600">See More</span>
        </div>



        <div className=" flex scroll w-full mt-4">

  
        <MovieCard title={"MoonLight"} caption={"A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him."} uri={'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217'}/>

        </div>
        
      </div>



    </div>
  );
}

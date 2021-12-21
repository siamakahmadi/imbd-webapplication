import React,{useEffect,useState} from "react";
import "./Style/movie.css";
import MovieCard from "./components/movieCard";
import { Link } from "react-router-dom";

export default function Movies() {

  const [movies, setMovies] = useState([]);
  const [trendMovies, settrendMovies] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/recentlymovies')
    .then(Response=> Response.json())
    .then(movies=>setMovies(movies));

    fetch('http://localhost:3000/trendingmovies')
    .then(Response=> Response.json())
    .then(trendMovies=>settrendMovies(trendMovies));

  }
  ,[]);


  const moviedetail = movies.map(detail=> <MovieCard  title={detail.Title} slug={detail.Slug} image={detail.Img} caption={detail.Summary} />) ;
  const TrendMovie = trendMovies.map(detail=> <MovieCard title={detail.Title} image={detail.Img} caption={detail.Summary} />) ;



  return (
    <div>

      <div className="rounded-full w-full h-12 flex ">
        <input
          type="text"
          className=" searchInputBg w-full h-full rounded-full  border-solid border-2 border-blue-600"
          placeholder="Type Movie Name"
        />
      </div>

      <div>
        <div className="flex justify-between mt-4 items-baseline ">
          <h1 className="sm:text-lg font-semibold">Recently Movies</h1>
          <Link to="moremovie"><span className="sm:text-sm text-blue-600">See More</span></Link>
        </div>



        <div className=" flex scroll w-full mt-4">
          
          {!movies.length ? <h3>Loading Movie ...</h3> : 
          <>
          {moviedetail}
          </>
          }

        </div>
      </div>

      <div>
        <div className="flex justify-between mt-4 items-baseline ">
          <h1 className="text-lg font-semibold">Trending Movies</h1>
          <span className="text-sm text-blue-600">See More</span>
        </div>



        <div className=" flex scroll w-full mt-4">

        {!movies.length ? <h3>Loading Movie ...</h3> : 
          <>
          {TrendMovie}
          </>
          }

        </div> 
      </div>

      <div>
        <div className="flex justify-between mt-4 items-baseline ">
          <h1 className="text-lg font-semibold">Upcoming Movies</h1>
          <span className="text-sm text-blue-600">See More</span>
        </div>



        <div className=" flex scroll w-full mt-4">

        
        <MovieCard title={"MoonLight"} caption={"A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him."} uri={'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217'}/>

        </div>
        
      </div>



    </div>
  );
}

import React,{useEffect,useState} from "react";
import { useParams } from 'react-router-dom'
import MovieSinglePage from "./MovieSinglePage";


export default function SinglePage() {
  const Slug = useParams().slug;
  const [moviesContent, setmoviesContent] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:3000/recentlymovies?Slug=${Slug}`)
    .then(Response=> Response.json())
    .then(movies=>setmoviesContent(movies));
    
  },[]);
  const MoviesDetails = moviesContent.map(detail=> <MovieSinglePage Title={detail.Title} Summary={detail.Summary} Img={detail.Img} Description={detail.Description} Time={detail.Time} Genres={detail.Genres} />) ;
  // const moviedetail = movies.map(detail=> <MovieCard  title={detail.Title} slug={detail.Slug} image={detail.Img} caption={detail.Summary} />) ;

  return (
    <div> 
      {MoviesDetails}
    </div>
  )
}

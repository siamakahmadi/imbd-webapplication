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
    
  },[Slug]);
  const MoviesDetails = moviesContent.map(detail=> <MovieSinglePage Title={detail.Title} Summary={detail.Summary} Img={detail.Img} Description={detail.Description} Time={detail.Time} Genres={detail.Genres} />) ;

  return (
    <div> 
      {MoviesDetails}
    </div>
  )
}

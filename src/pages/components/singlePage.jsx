import React,{useEffect,useState} from "react";
import { useParams } from 'react-router-dom'



export default function SinglePage() {


  const params = useParams().slug;
  console.log(params);

  const [moviesContent, setmoviesContent] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3000/recentlymovies/${params}`)
    .then(Response=> Response.json())
    .then(movies=>setmoviesContent(movies));
  }
  ,[]);

  return (
    <div>
      <h1>Welcome To Single Page</h1>
    </div>
  )
}

import Movies from "./movies";
import News from "./news";
import Shows from "./shows";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Header from './components/header'

function Main() {
    return (
      <>
        <div className="">
          <div className="m-4">
            <Header/>
            <div className="mt-6">
            <Routes >
              <Route path="/" element={<Movies />} />
              <Route path="shows" element={<Shows />} />
              <Route path="news" element={<News />} />
            </Routes>
            </div>
          </div>
  
          <div className="fixed bottom-0 w-full h-14  mainColor  lg:w-60 lg:left-1/3 lg:rounded-full   lg:bottom-2 ">
            <Navigation  />
          </div>
        </div>
        
        
        
        {/* <Routes >
              
  
              <Route path="single/:slug" element={<SinglePage/>}/>
            </Routes> */}
      </>
    );
  }
  
  export default Main;
  
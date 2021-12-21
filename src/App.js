import "./App.css";
import Movies from "./pages/movies";
import News from "./pages/news";
import Shows from "./pages/shows";
import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/components/navigation";
import Header from './pages/components/header'
import SinglePage from './pages/components/singlePage'
function App() {
  return (
    
      <div className="">
        <div className="m-4">
          <Header/>
          <div className="mt-6">
          <Routes >
            <Route path="/" element={<Movies />} />
            <Route path="shows" element={<Shows />} />
            <Route path="news" element={<News />} />

            <Route path="single/:slug" element={<SinglePage/>}/>
          </Routes>
          </div>
        </div>

        <div className="fixed bottom-0 w-full h-14  mainColor  lg:w-60 lg:left-1/3 lg:rounded-full   lg:bottom-2 ">
          
          <Navigation  />
        </div>
      </div>
    
  );
}

export default App;

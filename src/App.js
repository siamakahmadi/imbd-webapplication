import "./App.css";
import Movies from './pages/movies';
import News from './pages/news';
import Shows from './pages/shows';
import {Route,Routes} from 'react-router-dom'
import Navigation from './pages/components/navigation'
function App() {
  return (
    <>

    
      <div className="">
        <Routes className="">
          <Route path="/" element={<Movies />} />
          <Route path="shows" element={<Shows />} />
          <Route path="news" element={<News />} />
        </Routes>
      </div>

      <div className="absolute bottom-0 w-full h-14 ">
          <Navigation/>
      </div>
    </>
  );
}

export default App;

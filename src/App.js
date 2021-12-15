import "./App.css";
import Movies from './pages/movies';
import News from './pages/news';
import Shows from './pages/shows';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>

    
      <div className="row">
        <Routes className="">
          <Route path="/" element={<Movies />} />
          <Route path="shows" element={<Shows />} />
          <Route path="news" element={<News />} />
        </Routes>
      </div>

      <div className="row">

      </div>
    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import SinglePage from './pages/components/Single/mainSingle'
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="single/:slug" element={<SinglePage />} />
      </Routes>
      
    </>
  );
}

export default App;

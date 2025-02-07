import { Routes, Route } from "react-router-dom";
import Lofts from "./pages/Lofts";
import Dance from "./pages/Dance";
import Bankets from "./pages/Bankets";
import Photo from "./pages/Photo";
import MainPage from "./pages/MainPage"; // Главная страница

const MainRoutes = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Главная страница */}
        <Route path="/lofts" element={<Lofts />} />
        <Route path="/bankets" element={<Bankets />} />
        <Route path="/dance" element={<Dance />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
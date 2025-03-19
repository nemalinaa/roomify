import { Routes, Route } from "react-router-dom";
import Lofts from "./pages/Lofts.jsx";
import Dance from "./pages/Dance";
import Bankets from "./pages/Bankets";
import Photo from "./pages/Photo";
import MainPage from "./pages/MainPage"; // Главная страница
import LoftCard from "./pages/LoftCard.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import AdminAuth from "./pages/AdminAuth.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import AddRoom from "./pages/AddRoom.jsx";


const MainRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/addroom' element={<AddRoom />} />
        <Route path='/adminauth' element={<AdminAuth />} />

        <Route path="/" element={<MainPage />} /> {/* Главная страница */}
        <Route path="/lofts" element={<Lofts />} />
        <Route path="/bankets" element={<Bankets />} />
        <Route path="/dance" element={<Dance />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/card/:id" element={<LoftCard />} />
        <Route path="/results" element={<SearchResults />}></Route>
      </Routes>

      <Footer />


    </div>
  );
};

export default MainRoutes;
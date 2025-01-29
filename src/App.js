import { Route, Router } from "react-router";
import MainPage from "./pages/MainPage";
// import logo from "./images/logo.svg";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <img src={logo} /> */}
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Router } from "react-router";
import MainPage from "./pages/MainPage";
// import logo from "./images/logo.svg";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import MainRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <MainRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

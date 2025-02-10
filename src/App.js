import { BrowserRouter } from "react-router";

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

import { BrowserRouter } from "react-router";

// import logo from "./images/logo.svg";

import MainRoutes from "./routes";
import ScrollToTop from "./data/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

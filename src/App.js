import "./App.css";
import NavBar from "./components/Navbar";
import Login from "./page/Login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./page/PrivateRoute";
import Signup from "./page/Signup";
import Details from "./page/Product";
import LandingPage from "./page/LandingPage";
import Footer from "./components/Footer";
import Product from "./page/Product";

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

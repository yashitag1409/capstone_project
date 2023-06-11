import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/Signin/Signin";
import Header from "./Components/Header/Header";
import FM from "./Components/FoodMenu/FM";
import Footer from "./Components/Footer/Footer";
import Aboutus from "./Components/AboutUs/Aboutus";
import Restaurant from "./Components/RestaurantName/Restaurant";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header-component">
          <Header />
          {/* lorem */}
        </div>
        <div className="body-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/menu" element={<FM />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/restaurant" element={<Restaurant />}></Route>
          </Routes>
        </div>
        <div className="footer-component">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

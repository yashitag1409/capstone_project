import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/Signin/Signin";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header-component">
          <Header />
          <div className="header-quote">
            {" "}
            Find the Best Restaurant And Services{" "}
          </div>
        </div>
        <div className="body-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            {/* <Route path="/" element={<Home />}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

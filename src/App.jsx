import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Service from "./Pages/Service";
import Footer from "./Components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/service" element={<Service />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Loader from "./components/loader/Loader";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

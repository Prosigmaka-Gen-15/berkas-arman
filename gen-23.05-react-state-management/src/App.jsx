import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Detail from "./Page/Detail";
import Admin from "./Page/Admin";
import Shop from "./Page/shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:productId" element={<Detail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/keranjang" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

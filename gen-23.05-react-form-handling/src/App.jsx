import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Detail from "./Page/Detail";
import Admin from "./Page/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:productId" element={<Detail />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

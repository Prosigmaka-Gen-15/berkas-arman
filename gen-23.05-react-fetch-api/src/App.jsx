import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Detail from "./Page/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

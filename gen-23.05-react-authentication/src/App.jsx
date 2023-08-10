import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Detail from "./Page/Detail";
import Admin from "./Page/Admin";
import Shop from "./Page/shop";
import Login from "./Page/Login";
import PrivateRoute from "./Component/Route/privateRoute";
import GuestRoute from "./Component/Route/GuestRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/detail/:productId" element={<Detail />} />

        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/keranjang" element={<Shop />} />
        </Route>

        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

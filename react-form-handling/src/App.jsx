import "./App.css";
import SideBar from "./component/SideBar";
import Navbar from "./component/Navbar/Navbar";
import Product from "./component/Maincontent/Product";

function App() {
  return (
    <div className="w-full min-h-screen flex bg-gray-950">
      <SideBar />
      <section className="flex-1 ">
        <Navbar />
        <Product />
      </section>
    </div>
  );
}

export default App;

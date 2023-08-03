import React from "react";
import MainContent from "../Detail/MainContent";
import Navbar from "../Home/Navbar";

const Detail = () => {
  const [item, setItem] = useState({});

  const getProduct = async () => {
    try {
      let response = await axios.get(" http://localhost:3000/posts");
      setItem(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
};

export default Detail;

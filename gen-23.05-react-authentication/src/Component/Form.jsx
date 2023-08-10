import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Form = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [productIds, setProductIds] = useState(0);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const getProduct = () => {
    axios
      .get("http://localhost:3000/660/admin", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setProduct(response.data))
      .catch((error) => {
        alert("lu bukan admin");
        console.log(error);
      });
  };

  const handleOpenProduct = (productId) => {
    console.log(productId);
    if (productId) {
      setProductIds(productId);
    }
    setFormIsOpen(true);
  };

  const deleteProduct = (productId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this product");
    if (shouldDelete) {
      axios
        .delete("http://localhost:3000/admin/" + productId)
        .then(() => getProduct())
        .catch((err) => alert(err));
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full py-6 px-6 mx-auto flex flex-col gap-5 ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">
            <span> Hay </span>
            {user.id}
            {user.email}
            {user.username}
          </h1>
          <button onClick={() => setFormIsOpen(true)} className="bg-yellow-400 p-2 rounded-md text-black font-semibold ">
            Add Product
          </button>
        </div>
      </div>
      <div className="w-full flex">
        <table className="table-auto w-full rounded-xl border ">
          <thead className=" bg-blue-400">
            <tr>
              <th className="text-start px-2 py-2 border">No</th>
              <th className="text-center px-2 py-2 border">Product</th>
              <th className="text-center px-2 py-2 border">Detail Product</th>
              <th className="text-center px-2 py-2 border">Harga</th>
              <th className="text-center px-2 py-2 border">Edit</th>
              <th className="text-center px-2 py-2 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product) => (
              <tr>
                <td className="text-start px-2 py-2 border">{product.id}</td>
                <td className="text-center px-2 py-2 border">{product.nama}</td>
                <td className="text-center px-2 py-2 border">{product.desc}</td>
                <td className="text-center px-2 py-2 border">{product.harga}</td>
                <td className="text-center px-2 py-2 border">
                  <button onClick={() => handleOpenProduct(product.id)} className="bg-yellow-400 px-4 py-2 rounded-md font-semibold">
                    Edit
                  </button>
                </td>
                <td className="text-center px-2 py-2 border">
                  <button onClick={() => deleteProduct(product.id)} className="bg-red-600 px-4 py-2 rounded-md font-semibold">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {formIsOpen && <AddProduct setFormIsOpen={setFormIsOpen} id={productIds} getProducts={getProduct} />}
    </div>
  );
};

export default Form;

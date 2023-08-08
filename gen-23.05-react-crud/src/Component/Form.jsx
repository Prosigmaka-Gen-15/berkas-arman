import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import axios from "axios";
import { useForm } from "react-hook-form";

const Form = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    axios
      .get("http://localhost:3000/admin ")
      .then((response) => setProduct(response.data))
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full py-6 px-6 mx-auto flex flex-col gap-5 ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">List Product</h1>
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
                  <button className="bg-yellow-400 px-4 py-2 rounded-md font-semibold">Edit</button>
                </td>
                <td className="text-center px-2 py-2 border">
                  <button className="bg-red-600 px-4 py-2 rounded-md font-semibold">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {formIsOpen && <AddProduct setFormIsOpen={setFormIsOpen} />}
    </div>
  );
};

export default Form;

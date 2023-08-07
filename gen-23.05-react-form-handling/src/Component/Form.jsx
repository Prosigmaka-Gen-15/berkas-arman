import React, { useState } from "react";
import AddProduct from "./AddProduct";

const Form = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);

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
            <tr>
              <td className="text-start px-2 py-2 border">1</td>
              <td className="text-center px-2 py-2 border">Sepatu keren</td>
              <td className="text-center px-2 py-2 border">ah bebas lah</td>
              <td className="text-center px-2 py-2 border">2000</td>
              <td className="text-center px-2 py-2 border">
                <button className="bg-yellow-400 px-4 py-2 rounded-md font-semibold">Edit</button>
              </td>
              <td className="text-center px-2 py-2 border">
                <button className="bg-red-600 px-4 py-2 rounded-md font-semibold">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="text-start px-2 py-2 border">2</td>
              <td className="text-center px-2 py-2 border">Headphone</td>
              <td className="text-center px-2 py-2 border">ah bebas lah</td>
              <td className="text-center px-2 py-2 border">5000</td>
              <td className="text-center px-2 py-2 border">
                <button className="bg-yellow-400 px-4 py-2 rounded-md font-semibold">Edit</button>
              </td>
              <td className="text-center px-2 py-2 border">
                <button className="bg-red-600 px-4 py-2 rounded-md font-semibold">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="text-start px-2 py-2 border">3</td>
              <td className="text-center px-2 py-2 border">baju keren</td>
              <td className="text-center px-2 py-2 border">ah bebas lah</td>
              <td className="text-center px-2 py-2 border">6000</td>
              <td className="text-center px-2 py-2 border">
                <button className="bg-yellow-400 px-4 py-2 rounded-md font-semibold">Edit</button>
              </td>
              <td className="text-center px-2 py-2 border">
                <button className="bg-red-600 px-4 py-2 rounded-md font-semibold">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {formIsOpen && <AddProduct setFormIsOpen={setFormIsOpen} />}
    </div>
  );
};

export default Form;

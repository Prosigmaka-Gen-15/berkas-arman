import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
const schema = yup.object().shape({
  nama: yup.string().required(),
  desc: yup.string().required(),
  harga: yup.number().integer().positive().required(),
});
const AddProduct = ({ setFormIsOpen, id, getProducts, setProductIds }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const getProduct = () => {
    axios
      .get("http://localhost:3000/admin/" + id)
      .then((ress) => {
        setValue("nama", ress.data.nama);
        setValue("desc", ress.data.desc);
        setValue("harga", ress.data.harga);
      })
      .catch((err) => alert(err));
  };

  const onSubmit = async (data) => {
    try {
      if (id) await axios.patch("http://localhost:3000/admin/" + id, data);
      else await axios.post("http://localhost:3000/admin", data);
      setFormIsOpen(false);
      getProducts();
    } catch (err) {
      alert(err);
      console.log(err);
    }
    // window.location.reload();
  };
  useEffect(() => {
    if (id) getProduct();
  }, [id]);

  const closeForm = () => {
    reset();
    setProductIds(0);
    setFormIsOpen(false);
  };

  return (
    <>
      <section className="fixed inset-0 flex justify-center items-center">
        <div onClick={closeForm} className="bg-gray-500/50 absolute w-full h-full"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="block relative w-full max-w-lg p-8 bg-blue-400 rounded-lg shadow-2xl shadow-blue-600">
          <div className="text-2xl mb-5 ">
            <h1 className="font-semibold">Masukkan Product Anda</h1>
          </div>
          <div className="font-semibold text-xl mt-2">
            <label className="block font-bold mb-1">Product</label>
            {errors.nama?.message}
            <input type="text" {...register("nama")} className="w-full rounded-md" />
            {errors.desc?.message}
            <label className="block font-bold mb-1">Detail Product</label>
            <input type="text" {...register("desc")} className="w-full rounded-md" />
            {errors.harga?.message}
            <label className="block font-bold mb-1">Harga</label>
            <input type="text" {...register("harga")} className="w-full rounded-md" />
          </div>
          <div className="flex mt-4 justify-between ">
            <button className="bg-green-400 p-3 rounded-xl">Submit</button>
            <button onClick={closeForm} className="bg-white p-3 rounded-xl">
              Cancel
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProduct;

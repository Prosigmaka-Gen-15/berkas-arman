import React, { useState } from "react";

const AddProduct = ({ setFormIsOpen }) => {
  return <>
    <section className="fixed inset-0 flex justify-center items-center">
      <div onClick={() => setFormIsOpen(false)} className="bg-black/50 absolute w-full h-full"></div>
      <form className="block relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h1>Contoh Form</h1>
      </form>
    </section>
  </>
};

export default AddProduct;

import React, { useState } from "react";

const AddProduct = () => {
  const [nama, setNama] = useState("arman");
  return (
    <div>
      <br />
      nama:
      <input type="text" value={nama} placeholder="Nama" onChange={(event) => setNama(event.target.value)} />
      <br />
      {nama}
    </div>
  );
};

export default AddProduct;

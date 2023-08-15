import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar";

const DetailPemesanan = () => {
  const [transactions, setTransaction] = useState([]);
  const getTransaction = async () => {
    try {
      let ress = await axios.get("http://localhost:3000/transactions");
      setTransaction(ress.data);
      // console.log(ress.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="container ">
        <div className="flex flex-col items-center min-h-screen">
          <h1 className="text-2xl font-bold p-4">Riwayat Pemesanan</h1>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th className="border-black border-2 p-2 text-sm">ID</th>
                  <th className="border-black border-2 p-2 text-sm">Total Barang</th>
                  <th className="border-black border-2 p-2 text-sm">Harga Total</th>
                  <th className="border-black border-2 p-2 text-sm">Jasa Peniriman</th>
                  <th className="border-black border-2 p-2 text-sm">Pembayaran</th>
                  <th className="border-black border-2 p-2 text-sm">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((formData, index) => {
                  return (
                    <tr key={index}>
                      <td className="border-black border-2 p-2 text-sm">{formData.userId}</td>
                      <td className="border-black border-2 p-2 text-sm">{formData.totalItems}</td>
                      <td className="border-black border-2 p-2 text-sm">{parseInt(formData.totalPrice)?.toLocaleString()}</td>
                      <td className="border-black border-2 p-2 text-sm">{formData.shipment}</td>
                      <td className="border-black border-2 p-2 text-sm gap-2 ">{formData.payment}</td>
                      <td className="border-black border-2 p-2 text-sm gap-2 ">{formData.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPemesanan;

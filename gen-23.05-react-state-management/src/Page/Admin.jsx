import React from "react";
import Sidebar from "../Component/Sidebar";
import Form from "../Component/Form";
import Navbar from "../Component/Navbar";

const Admin = () => {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <section className="flex-1 ">
        <Navbar />
        <Form />
      </section>
    </div>
  );
};

export default Admin;

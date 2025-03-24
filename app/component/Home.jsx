// "use client";
connectMongoDB;
import Link from "next/link";
// import { useState } from "react";
import Table from "../component/Table";
// import Form from "./Form";
import connectMongoDB from "../libs/mongodb";
export default function Home() {
  // const [form, setForm] = useState(false);
  connectMongoDB();
  return (
    <div className="px-2 lg:px-10 xl:px-14 py-5">
      <h1 className=" text-2xl font-bold text-center my-4">
        Employee Management
      </h1>
      <div>
        <Link
          href="/add"
          className=" px-5 py-2 bg-green-500 rounded text-white hover:bg-gray-400 font-bold mt-3"
        >
          Add New Employee
        </Link>
      </div>
      <Table />
    </div>
  );
}

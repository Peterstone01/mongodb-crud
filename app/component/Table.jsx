"use client";
import Link from "next/link";
import Button from "../component/Button";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const Table = () => {
  const router = useRouter();
  const [man, setMan] = useState([]);

  useEffect(() => {
    axios
      .get("https://mongodb-crud-kri1.vercel.app/api/employee", {
        catche: "no-store",
      })
      .then((response) => setMan(response.data.data));
    router.refresh();
  }, []);
  console.log(man);

  return (
    <div className="my-5">
      {/* //////////////////table header */}
      <div className=" hidden lg:grid px-5 lg:grid-cols-11 gap-4 font-bold  bg-green-500">
        <div className="col-span-1   ">
          <h1 className="font-bold  text-white  text-lg">Index</h1>
        </div>
        <div className="col-span-3   ">
          <h1 className="font-bold  text-white  text-lg">Full Name</h1>
        </div>
        <div className="col-span-3   ">
          <h1 className="font-bold  text-white text-lg"> Email</h1>
        </div>
        <div className="col-span-2  ">
          <h1 className="font-bold  text-white text-lg">Salary</h1>
        </div>

        <div className="col-span-1   ">
          <h1 className="font-bold text-lg text-white">Action</h1>
        </div>
      </div>
      {/* ///////////////////////table contents */}
      <div className="my-5">
        {man?.map((item, i) => (
          <div
            key={i}
            className="lg:grid px-5 lg:grid-cols-11 gap-4 font-bold hover:bg-green-500 transition hover:text-white  bg-gray-100 py-2 my-2 "
          >
            <div className="col-span-1   ">
              <h1 className="">{i + 1}</h1>
            </div>
            <div className="col-span-3  flex justify-start items-center space-x-2  ">
              <p>Name:</p>
              <h1 className=" text-sm lg:text-lg">{item.name}</h1>
            </div>
            <div className="col-span-3 flex justify-start items-center space-x-2   ">
              <p>Email:</p>
              <h1 className="text-sm lg:text-lg">{item.email}</h1>
            </div>
            <div className="col-span-2 flex justify-start items-center space-x-2   ">
              <p>Salary:</p>
              <h1 className="text-sm lg:text-lg">${item.salary}</h1>
            </div>

            <div className="col-span-1  mx-2 flex justify-start items-center   ">
              <Link
                href={`/edit/${item._id}`}
                className="items-center justify-center "
              >
                <Pencil size={20} className="" />
              </Link>
              <Button id={item._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;

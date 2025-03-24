"use client";
import { useForm } from "react-hook-form";
import connectMongoDB from "../libs/mongodb";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const createEmployee = async (data) => {
    const response = await axios.post("/api/employee", data);
    router.push("/");
    console.log(data);
    // reset();
  };

  return (
    <div className="px-2 lg:px-10 xl:px-14 py-5">
      <form
        onSubmit={handleSubmit(createEmployee)}
        className=" w-full lg:w-[50%] mx-auto space-y-2"
      >
        <h1 className=" font-bold my-5">User information</h1>
        <input
          {...register("name", { required: "this field is required" })}
          type="text"
          placeholder="Full Name"
          className="px-5 py-2  border rounded  w-full"
        />
        {errors?.title?.message && <p>{errors.title.message}</p>}
        <input
          {...register("email", { required: "this field is required" })}
          type="email"
          placeholder="Email Address"
          className="px-5 py-2  border rounded w-full"
        />
        {errors?.title?.message && <p>{errors.title.message}</p>}

        {/* //////////////////////////second rows */}

        <input
          {...register("salary", { required: "this field is required" })}
          type="number"
          placeholder="Salary"
          className="px-5 py-2  border rounded w-full"
        />
        {errors?.title?.message && <p>{errors.title.message}</p>}

        <div className=" my-5 flex justify-start space-x-3 items-center w-full"></div>
        <button className=" px-5 py-2 bg-green-500 rounded text-white hover:bg-gray-400 font-bold mt-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;

"use client";
import { useForm } from "react-hook-form";
import connectMongoDB from "../libs/mongodb";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const Form = ({ name, salary, id, email }) => {
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newSalary, setNewSalary] = useState(salary);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/employee/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newEmail, newSalary }),
      });
      if (!response.ok) {
        throw new Error("failed to update");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-2 lg:px-10 xl:px-14 py-5">
      <form
        onSubmit={handleSubmit}
        className=" w-full lg:w-[50%] mx-auto space-y-2"
      >
        <h1 className=" font-bold my-5">User information</h1>
        <input
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          type="text"
          placeholder="Full Name"
          className="px-5 py-2  border rounded w-full"
        />

        <input
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
          type="email"
          placeholder="Email Address"
          className="px-5 py-2  border rounded w-full"
        />

        {/* //////////////////////////second rows */}

        <input
          onChange={(e) => setNewSalary(e.target.value)}
          value={newSalary}
          type="number"
          placeholder="Salary"
          className="px-5 py-2  border rounded w-full"
        />

        <button className=" px-5 py-2 bg-green-500 rounded text-white hover:bg-gray-400 font-bold mt-3">
          Update
        </button>
      </form>
    </div>
  );
};

export default Form;

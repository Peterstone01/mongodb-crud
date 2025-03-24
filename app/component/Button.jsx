"use client";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
const Button = ({ id }) => {
  const router = useRouter();
  const removeEmployee = async () => {
    const confirmed = confirm("Are you Sure?");
    if (confirmed) {
      const response = await fetch(
        `http://localhost:3000/api/employee?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        window.location.reload();
        // router.refresh();
      }
    }
  };
  return (
    <div className="text-red-500">
      <button onClick={removeEmployee}>
        <Trash2 size={20} className="  ml-2" />
      </button>
    </div>
  );
};

export default Button;

import React from "react";
import Form from "../../component/Form";

const getEmployeeById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/employee/${id}`, {
      cache: "no-store",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const { employee } = await getEmployeeById(params.id);
  const { salary, email, name, _id } = employee;

  console.log(params.id);

  return (
    <div>
      <Form id={_id} name={name} email={email} salary={salary} />
    </div>
  );
};

export default page;

export const fetchEmployee = async () => {
  const response = await fetch(
    "https://mongodb-crud-kri1.vercel.app/api/employee",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  console.log(data);
  if (error) {
    throw new Error("could not fetch Employee");
  }
  return data;
};

// export const fetchEmployee = async () => {
//   const response = await fetch("http://localhost:3000/api/employee", {
//     cache: "no-store",
//   });
//   const data = await response.json();
//   console.log(data);
//   if (error) {
//     throw new Error("could not fetch Employee");
//   }
//   return data;
// };

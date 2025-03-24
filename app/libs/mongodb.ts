import mongoose from "mongoose";

const mongoDbUri =
  "mongodb+srv://peterogechukwu:peterstone10203040@employee-clusters.kl9wz.mongodb.net/?retryWrites=true&w=majority&appName=Employee-clusters";

const mongoDbName = "Employee";

if (!mongoDbName) {
  throw new Error("Mongodb Name not");
}
if (!mongoDbUri) {
  throw new Error("Mongodb uri not found");
}

export default async function connectMongoDB() {
  try {
    await mongoose.connect(mongoDbUri, { dbName: mongoDbName });

    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
  }
}

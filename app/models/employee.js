import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema(
  {
    name: String,
    email: String,
    salary: Number,
    birthday: String,
    status: Boolean,
  },
  {
    timestamps: true,
  }
);
const Employee =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);
export default Employee;

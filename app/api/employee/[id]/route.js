import { NextResponse } from "next/server";
import Employee from "../../../models/employee";
export async function PUT(req, { params }) {
  const {
    newName: name,
    newSalary: salary,
    newEmail: email,
  } = await req.json();
  await Employee.findByIdAndUpdate(params.id, {
    name,
    salary,
    email,
  });
  return NextResponse.json({ status: 200, message: "updated successfully" });
}
/////////////////////find single employee
export async function GET(req, { params }) {
  const employee = await Employee.findOne({ _id: params.id });
  return NextResponse.json({ employee }, { status: 200 });
}

import { NextRequest, NextResponse } from "next/server";
import Employee from "../../models/employee";

///////////////////////////////////////////
export async function GET() {
  try {
    const fetchEmployee = await Employee.find({});

    return NextResponse.json({ status: 200, data: fetchEmployee });
  } catch (error) {
    console.log(error);
    NextResponse.json({ status: 400, message: "something went wrong" });
  }
}
/////////////////////////post
export async function POST(req: NextRequest) {
  try {
    const { name, email, salary, birthday, status } = await req.json();

    const addEmployee = new Employee({
      name: name,
      email: email,
      salary,
      birthday,
      status,
    });
    await addEmployee.save();
    return NextResponse.json({ status: 200, message: "employee added" });
  } catch (error) {
    console.log(error);
    NextResponse.json({ status: 400, message: "something went wrong" });
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await Employee.findByIdAndDelete(id);
  return NextResponse.json({ message: "Employee Deleted", status: 200 });
}

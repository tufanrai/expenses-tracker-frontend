import { Ilogin, ISignup } from "@/interface/form.interface";
import apiInstan from ".";
/* eslint-disable @tpescript */

// gets the form from the user login form and sends to the server to store the datas in the database
export const Login = async (logForm: Ilogin) => {
  try {
    const response = await apiInstan.post("/api/auth/login", logForm);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

export const Signup = async (SignupForm: ISignup) => {
  try {
    const response = await apiInstan.post("/api/auth/register", SignupForm);
  } catch (err: any) {
    throw err.response.data;
  }
};

"use client";
import React from "react";
import Image from "next/image";
import bg from "@/image/auth_bg.jpg";
import Link from "next/link";
import { GoArrowLeft, GoLock, GoMail } from "react-icons/go";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { logSchema } from "@/schema/form.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { Login } from "@/src/api/auth.api";
import { Ilogin } from "@/interface/form.interface";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logSchema),
  });

  const { mutate } = useMutation({
    mutationFn: Login,
    mutationKey: ["login"],
    onSuccess: (data: any) => {
      console.log("login success", data);
      reset();
      router.replace("/dashboard");
      toast.success("successfully logedin!", { duration: 3000 });
    },
    onError: (err: any) => {
      console.log("login error", err);
      toast.error(err?.message ?? "failed to log in", { duration: 3000 });
    },
  });

  const onSubmit: SubmitHandler<Ilogin> = (data) => {
    // on submition of form this function sends the datas to the backend
    mutate(data);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('${bg.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[350px] py-5 w-full text-black relative border border-blue-500 rounded-ss-[25%] rounded-ee-[25%] shadow-md shadow-blue-400 bg-white/30 backdrop-blur-sm">
        <Link className="absolute top-10 left-10" href={"/"}>
          <GoArrowLeft />
        </Link>
        <h1 className="text-center font-bold text-2xl my-3 text-blue-600">
          Log in
        </h1>
        <div className="px-7 py-4 mb-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-start justify-center gap-2 relative">
              <GoMail className="absolute top-9 text-slate-500 left-1 text-base" />
              <label className="text-sm text-thin text-slate-500">Email:</label>
              <input
                className={`w-full px-4 py-1 pl-5 text-thin text-sm text-slate-600 border-0 border-b-[1px] focus:outline-none bg-transparent ${
                  errors.email && errors.email
                    ? "border-red-400"
                    : "border-blue-400"
                }`}
                {...register("email")}
                type="text"
                placeholder="demomail@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs font-thin">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start justify-center gap-2 mt-3 relative">
              <GoLock className="absolute top-9 text-slate-500 left-1 text-base" />
              <label className="text-sm text-thin text-slate-500">
                Password:
              </label>
              <input
                className={`w-full px-4 py-1 pl-5 text-thin text-sm text-slate-600 border-0 border-b-[1px] focus:outline-none bg-transparent ${
                  errors.password && errors.password
                    ? "border-red-400"
                    : "border-blue-400"
                }`}
                {...register("password")}
                type="password"
                placeholder="password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs font-thin">
                  {errors.password.message}
                </p>
              )}
              <Link
                className="w-full mt-1 underline py-3 text-sky-500 text-xs font-thin text-end"
                href={"#"}
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex flex-col items-start justify-center mt-[18px]">
              <button
                className="w-full text-center font-bold text-lg py-2 border-[1px] border-blue-400 text-blue-400 ease duration-200 hover:bg-blue-400 hover:text-white"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
          <div>
            <p className="text-sm font-thin text-center mt-5">
              Don't have an account?
              <Link className="underline text-sky-500" href={"/auth/signup"}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

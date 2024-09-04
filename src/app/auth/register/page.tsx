"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React from "react";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  console.log(errors);

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={onSubmit} className="">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>

        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Username:
        </label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="username"
        />

        {errors.username?.message && typeof errors.username.message === "string" && (
          <span className="text-red-500 text-xs">
            {errors.username.message}
          </span>
        )}

        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="user@email.com"
        />
        {errors.email?.message && typeof errors.email.message === "string" && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="password"
        />
        {errors.password?.message && typeof errors.password.message === "string" && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        <label
          htmlFor="confirmPassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm Password is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="********"
        />
        {errors.confirmPassword?.message && typeof errors.confirmPassword.message === "string" && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;

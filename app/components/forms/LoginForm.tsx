"use client";

import { useState, FormEvent } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Logo from "../../assets/icons/Logo";
import Button from "../Button";

import { ILoginForm } from "@/app/interface/login-form";

const LoginForm = () => {
  const [formData, setFormData] = useState<ILoginForm>({
    email: "",
    password: "",
    error: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (!res) {
        throw new Error("Res is undefined");
      }

      if (res.error) {
        setFormData({ ...formData, error: "Invalid Credentials" });
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[320px] w-full md:max-w-[250px]">
      <div className="pb-32">
        <div className="w-full flex justify-center pb-2">
          <Logo />
        </div>
        <div className="font-lexend text-center">
          Recipes from all over the world
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <div className="grid">
          <label className="text-xs text-cooky-red font-lexend pb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-cooky-gray rounded-full py-2 px-4"
          />
        </div>
        <div className="grid pb-7">
          <label className="text-xs text-cooky-red font-lexend pb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-cooky-gray rounded-full py-2 px-4"
          />
        </div>
        <label className="font-lexend text-cooky-red text-center font-extralight">
          {formData.error}
        </label>
        <Button label="Log In" rounded />
      </form>

      <div className="text-sm text-center pt-24 font-lexend md:pt-8">
        Not yet registered?{" "}
        <Link href="/register" className="text-cooky-red font-bold underline">
          SIGN UP NOW!
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;

"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Logo from "../../assets/icons/Logo";
import Button from "../Button";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrorData, setFormErrorData] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const [canSignUp, setCanSignUp] = useState({
    termsAndConditions: false,
    privacyPolicy: false,
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

    const { name, email, password, confirmPassword } = formData;

    setFormErrorData({
      nameError: !name ? "Name should not be empty" : "",
      emailError: !email ? "Email should not be empty" : "",
      passwordError: !password ? "Password must not be empty" : "",
      confirmPasswordError: "",
    });

    if (password.length < 8) {
      setFormErrorData({
        ...formErrorData,
        passwordError: "Password must contain at least 8 characters",
      });
      return;
    }

    if (password !== confirmPassword) {
      setFormErrorData({
        ...formErrorData,
        confirmPasswordError: "Password does not match",
      });
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setFormErrorData({
          ...formErrorData,
          emailError: "Email is already in use",
        });
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setFormErrorData({
          nameError: "",
          emailError: "",
          passwordError: "",
          confirmPasswordError: "",
        });
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("error during registration: ", error);
    }
  };

  return (
    <div className="max-w-[320px] w-full md:max-w-[520px]">
      <div className="pb-12 md:pb-22">
        <div className="w-full flex pb-2 gap-1 md:gap-2">
          <div className="font-paytone text-2xl md:text-6xl text-cooky-red">
            Sign up to
          </div>
          <div className="max-w-[80px] pt-[7px] max-h-[4rem] md:max-w-[200px] md:pt-2.5 md:max-h-[5rem]">
            <Logo />
          </div>
        </div>
      </div>

      <div className="max-w-[312px] w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <div className="grid pb-4">
            <label className="text-xs text-cooky-red font-lexend pb-1">
              Name
            </label>

            <input
              type="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-cooky-gray rounded-full py-2 px-4"
            />
            <p className="text-cooky-red/70 text-xs pt-1.5 font-lexend">
              {formErrorData.nameError}
            </p>
          </div>
          <div className="grid pb-4">
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
            <p className="text-cooky-red/70 text-xs pt-1.5 font-lexend">
              {formErrorData.emailError}
            </p>
          </div>
          <div className="grid pb-4">
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
            <p className="text-cooky-red/70 text-xs pt-1.5 font-lexend">
              {formErrorData.passwordError}
            </p>
          </div>
          <div className="grid pb-8">
            <label className="text-xs text-cooky-red font-lexend pb-1">
              Repeat Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-cooky-gray rounded-full py-2 px-4"
            />
            <p className="text-cooky-red/70 text-xs pt-1.5 font-lexend">
              {formErrorData.confirmPasswordError}
            </p>
          </div>

          <div className="flex items-center mb-1">
            <input
              onChange={(e) =>
                setCanSignUp({
                  ...canSignUp,
                  termsAndConditions: e.target.checked,
                })
              }
              type="checkbox"
              className="accent-cooky-red w-3 h-3 bg-gray-100 border-gray300 rounded"
            />
            <label className="ms-1 text-sm font-lexend text-cooky-black pl-1">
              I agree to the Terms and Conditions
            </label>
          </div>
          <div className="flex items-center mb-1">
            <input
              onChange={(e) =>
                setCanSignUp({
                  ...canSignUp,
                  privacyPolicy: e.target.checked,
                })
              }
              type="checkbox"
              className="accent-cooky-red w-3 h-3 bg-gray-100 border-gray300 rounded"
            />
            <label className="ms-1 text-sm font-lexend text-cooky-black pl-1">
              I agree to the Privacy Policy
            </label>
          </div>
          <Button
            label="Sign Up"
            rounded
            disabled={!canSignUp.privacyPolicy || !canSignUp.termsAndConditions}
          />
        </form>
        <div className="text-sm text-center pt-8 font-lexend">
          Already have an account?{" "}
          <Link href="/login" className="text-cooky-red font-bold underline">
            Log In Instead
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

export default function SignUpPage() {
  const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log({ data, error });


    // Error handling
    if (!error) {
      
      router.push("/login")
    }

    // Success handling
    if (data) {
      toast.success("Registration successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-slate-950 px-4">
      <Card className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 text-white">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-wide">
            Create Account
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Register to continue your journey
          </p>
        </div>

        {/* Form */}
        <Form
          className="flex flex-col gap-5"
          onSubmit={onSubmit}
        >
          {/* Name */}
          <TextField isRequired name="name" type="text">
            <Label className="text-gray-200 mb-1">
              Full Name
            </Label>

            <Input
              placeholder="Enter your full name"
              className="bg-white/10 border border-white/10 rounded-xl text-white placeholder:text-gray-500"
            />

            <FieldError />
          </TextField>

          {/* Image URL */}
          <TextField isRequired name="image" type="text">
            <Label className="text-gray-200 mb-1">
              Profile Image URL
            </Label>

            <Input
              placeholder="https://example.com/photo.jpg"
              className="bg-white/10 border border-white/10 rounded-xl text-white placeholder:text-gray-500"
            />

            <FieldError />
          </TextField>

          {/* Email */}
          <TextField isRequired name="email" type="email">
            <Label className="text-gray-200 mb-1">
              Email Address
            </Label>

            <Input
              placeholder="john@example.com"
              className="bg-white/10 border border-white/10 rounded-xl text-white placeholder:text-gray-500"
            />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
          >
            <Label className="text-gray-200 mb-1">
              Password
            </Label>

            <Input
              placeholder="Enter your password"
              className="bg-white/10 border border-white/10 rounded-xl text-white placeholder:text-gray-500"
            />

            <Description className="text-xs text-gray-500 mt-1">
              Must contain at least 8 characters, 1 uppercase letter,
              and 1 number.
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <Button
              type="submit"
              className="w-full bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
            >
             
              Register
            </Button>

            <Button
              type="reset"
              variant="bordered"
              className="w-full border-white/20 text-white rounded-xl hover:bg-white/10"
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* Footer */}
      <Link href={"/login"}>
        <div className="mt-8 text-center">
            
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <span className="text-white font-medium cursor-pointer hover:underline">
              Log in
            </span>
          </p>
        </div>
        </Link>
        
      </Card>
    </div>
  );
}
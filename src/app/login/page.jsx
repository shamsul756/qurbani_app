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

import { toast } from "react-toastify";

export default function SignIn() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log({ data, error });

    if (error) {
      toast.error(error.message || "Something went wrong!");
      return;
    }

    if (data) {
      toast.success("Registration successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black px-4">
      <Card className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 text-white">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Create Account
          </h1>
          <p className="text-gray-300 mt-2 text-sm">
            Join us and start your journey today
          </p>
        </div>

        {/* Form */}
        <Form
          className="flex flex-col gap-5"
          onSubmit={onSubmit}
        >
          {/* Email */}
          <TextField isRequired name="email" type="email">
            <Label className="text-white mb-1">Email</Label>
            <Input
              placeholder="john@example.com"
              className="bg-white/10 text-white placeholder:text-gray-400 border border-white/20 rounded-xl"
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
            <Label className="text-white mb-1">Password</Label>

            <Input
              placeholder="Enter your password"
              className="bg-white/10 text-white placeholder:text-gray-400 border border-white/20 rounded-xl"
            />

            <Description className="text-gray-400 text-xs mt-1">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

         <Button
            type="submit"
            className="w-full mt-3 bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition-all duration-300"
          >
            
            log In
          </Button>
       

        
        
        </Form>
      </Card>
    </div>
  );
}
"use client"

import { SignUpForm } from "@/components/login-form";
import { OTPForm } from "@/components/otp-form";

import { useState } from "react";

export default function Page() {

  const [loading, setLoading] = useState(false);
  const[showOtp, setShowOtp] = useState(false);
   const [email, setEmail] = useState("");

  const handleSignUp = async (email: string) => {
    setLoading(true);
    try {
      // Call your signup API here
      // await api.signup(email);
      setShowOtp(true);
    } catch (error) {
      console.error("Signup error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
      {
        showOtp ? (
          <OTPForm />
        ) : (
          <SignUpForm  onSignUp={handleSignUp}/>
        )
      }
      </div>
    </div>
  );
}

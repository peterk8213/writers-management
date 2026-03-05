"use client"

import { Page } from "@/components/pageLayout";

import AuthPage from "@/components/auth/page";
import {SignInForm} from "@/components/auth/root"
import { OTPForm } from "@/components/otp-form";

import { useState } from "react";


export default function LoginPage() {

    const [showOtp, setShowOtp] = useState(false);
      const [loading, setLoading] = useState(false);
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
    <Page>
      <Page.Main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          {showOtp ? (
            <OTPForm />
          ) : (
            <>
              <AuthPage />
              <SignInForm  onSignUp={handleSignUp} email={email} setEmail={setEmail}/>
            </>
          )}
        </div>
      </Page.Main>
      <Page.Footer>
        <p className="text-sm text-muted-foreground text-center">
          &copy; 2025 . All rights reserved.
        </p>
      </Page.Footer>
    </Page>
  );
}

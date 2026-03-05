"use client";

import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { Button, LiveFeedback, Input } from '@worldcoin/mini-apps-ui-kit-react';





import { useCallback, useState } from "react";

export function SignInForm({
  onSignUp,
  email,
  setEmail,
}: {
  onSignUp?: (email: string) => Promise<void>;
  email: string;
  setEmail: (email: string) => void;
}) {
  const [isPending, setIsPending] = useState(false);

  return (
    <div className={"flex flex-col gap-6"}>
      <Card>
        <CardHeader>
          <CardTitle>Access your account</CardTitle>
          <CardDescription>
            Enter your email below to signin to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <Input
                  id="email"
                  type="email"
                  label="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>

              <Field>
                <Button
                  type="button"
                  onClick={async () => {
                    const response = onSignUp ? await onSignUp(email) : null;
                    return response;
                  }}
                  className="rounded-2xl"
                >
                  SignUp
                </Button>

                <FieldDescription className="text-center">
                  Don't have an account?{" "}
                  <a href="/signup" className="underline text-blue-600">
                    Signup
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

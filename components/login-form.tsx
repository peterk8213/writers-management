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

export function SignUpForm({
  className,
  onSignUp,
  ...props
}: React.ComponentProps<"div"> & { onSignUp?: (email: string) => Promise<void> }) {

  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState('');
  
 const [username, setUsername] = useState('');

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>SignUp to your account</CardTitle>
          <CardDescription>
            Enter your email below to signup to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
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
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Username</FieldLabel>
                </div>
                <Input id="username" type="text" required 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Field>
              <Field>
                <Button
                  type="button"
                  onClick={
                    async () => {
                     const response = onSignUp ? await onSignUp(email) : null;
                     return response;
                    }
                  }
                  className="rounded-2xl"
                >
                  SignUp
                </Button>

                <FieldDescription className="text-center">
                  Already have an account?{" "}
                  <a href="/" className="underline text-blue-600">
                    Log in
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

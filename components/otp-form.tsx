"use client"
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

import { OTPField, Button } from "@worldcoin/mini-apps-ui-kit-react"
import { useRouter } from "next/navigation";
import { useState } from "react";

export function OTPForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Enter verification code</CardTitle>
        <CardDescription>We sent a 6-digit code to your email.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="otp">Verification code</FieldLabel>
              <OTPField value={code} onChange={(val: string) => setCode(val)} />
              <FieldDescription>
                Enter the 6-digit code sent to your email.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Button
                type="button"
                className="rounded-2xl"
                disabled={loading || code.length === 0}
                onClick={async () => {
                  setError(null);
                  setLoading(true);
                  try {
                    const res = await fetch('/api/verify-otp', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ code }),
                    });
                    if (!res.ok) throw new Error('Invalid code');
                    router.push('/bidder');
                  } catch (err: any) {
                    setError(err.message || 'Verification failed');
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                Verify
              </Button>
              <FieldDescription className="text-center">
                Didn&apos;t receive the code? <a href="#">Resend</a>
              </FieldDescription>
              {error && <div className="text-sm text-red-600 mt-2">{error}</div>}
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}

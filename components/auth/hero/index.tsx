"use client";
import Link from "next/link";
import { Typography } from "@worldcoin/mini-apps-ui-kit-react";

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center gap-3 text-foreground">
      <Typography variant="heading">Hello there! 👋 </Typography>
      {/* <Typography
        variant="body"
        className="text-lg text-muted-foreground text-pretty"
      >
        Access your workspace to manage your orders,
      </Typography> */}
      <Typography
        variant="body"
        className="text-lg text-muted-foreground text-pretty"
      >
        Track progress, and stay updated on assignments
      </Typography>

      {/* Features */}
    </div>
  );
}

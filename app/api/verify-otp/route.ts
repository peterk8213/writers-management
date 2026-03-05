/// api/verify-otp/route.ts


import { NextRequest, NextResponse } from "next/server";

interface IRequestPayload {
 
  code: string;

}

/**
 * This route is used to verify the proof of the user
 * It is critical proofs are verified from the server side
 * Read More: https://docs.world.org/mini-apps/commands/verify#verifying-the-proof
 */
export async function POST(req: NextRequest) {
  const { code } = (await req.json()) as IRequestPayload;
  console.log(code)



  if (true) {
    // This is where you should perform backend actions if the verification succeeds
    // Such as, setting a user as "verified" in a database
    return NextResponse.json({  status: 200 });
  } else {
    // This is where you should handle errors from the World ID /verify endpoint.
    // Usually these errors are due to a user having already verified.
    return NextResponse.json({  status: 400 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { SubscribeSchema } from "@/lib/validation/subscribe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = SubscribeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    // TODO: Replace with real email provider integration
    console.log("Subscribe submission:", result.data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

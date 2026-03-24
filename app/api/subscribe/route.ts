import { NextRequest, NextResponse } from "next/server";
import { SubscribeSchema } from "@/lib/validation/subscribe";
import { config } from "@/lib/config";
import { apiFetch } from "@/lib/api/helper";

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

    const { email } = result.data;
    
    const { data, error, status, message, errors } = await apiFetch(config.backend.endpoints.subscribe, {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    });

    if (error) {
      return NextResponse.json({ success: false, message, errors }, { status });
    }

    return NextResponse.json({ 
      success: true, 
      message: message || "Subscribed successfully",
      data 
    }, { status: 200 });
    
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

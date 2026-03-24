import { NextRequest, NextResponse } from "next/server";
import { RegisterSchema } from "@/lib/validation/register";
import { config } from "@/lib/config";
import { apiFetch } from "@/lib/api/helper";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = RegisterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { full_name, email, phone } = result.data;
    
    const { data, error, status, message, errors } = await apiFetch(config.backend.endpoints.register, {
      method: "POST",
      body: JSON.stringify({
        full_name,
        email,
        phone,
      }),
    });

    if (error) {
      return NextResponse.json({ success: false, message, errors }, { status });
    }

    return NextResponse.json({ 
      success: true, 
      message: message || "Account created successfully",
      data 
    }, { status: 200 });
    
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { ingredient } = await req.json();

    if (!ingredient) {
      return NextResponse.json(
        { error: "Ingredient is required" },
        { status: 400 },
      );
    }

    const apiUrl = `https://api.api-ninjas.com/v1/nutrition?query=${encodeURIComponent(
      ingredient,
    )}`;

    const response = await axios.get(apiUrl, {
      headers: {
        "X-Api-Key": process.env.NINJA_API_KEY as string,
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Error validating ingredient:", error);
    return NextResponse.json(
      { error: "Failed to validate ingredient" },
      { status: 500 },
    );
  }
}

import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") ?? "How I'd grow...";
  const industry = searchParams.get("industry") ?? "";
  const number = searchParams.get("number") ?? "0";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FAFAF8",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            backgroundColor: "#C4703E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "160px",
            fontWeight: 700,
          }}
        >
          C
        </div>
        <span
          style={{
            fontSize: "144px",
            fontWeight: 800,
            color: "#1A1A1A",
            letterSpacing: "-4px",
            marginTop: "64px",
          }}
        >
          CGT
        </span>
        <span
          style={{
            fontSize: "48px",
            color: "#999",
            marginTop: "24px",
            letterSpacing: "4px",
          }}
        >
          conguzto.com
        </span>
      </div>
    ),
    { width: 2400, height: 1260 },
  );
}

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
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            backgroundColor: "#C4703E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "80px",
            fontWeight: 700,
          }}
        >
          C
        </div>
        <span
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#1A1A1A",
            letterSpacing: "-2px",
            marginTop: "32px",
          }}
        >
          CGT
        </span>
        <span
          style={{
            fontSize: "24px",
            color: "#999",
            marginTop: "12px",
            letterSpacing: "2px",
          }}
        >
          conguzto.com
        </span>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

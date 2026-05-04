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
          padding: "48px 64px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#C4703E",
            textTransform: "uppercase",
            letterSpacing: "5px",
            marginBottom: "28px",
          }}
        >
          #{String(number).padStart(2, "0")}
          {industry ? ` · ${industry}` : ""}
        </span>
        <h1
          style={{
            fontSize: "80px",
            fontWeight: 800,
            color: "#1A1A1A",
            lineHeight: 1.1,
            letterSpacing: "-3px",
            textAlign: "center",
            margin: 0,
          }}
        >
          {title}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "36px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#C4703E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            C
          </div>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#1A1A1A",
            }}
          >
            CGT
          </span>
          <span style={{ fontSize: "20px", color: "#999", marginLeft: "8px" }}>
            conguzto.com
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

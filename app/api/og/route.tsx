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
          justifyContent: "space-between",
          backgroundColor: "#FAFAF8",
          padding: "60px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#C4703E",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              ANALYSIS #{String(number).padStart(2, "0")}
            </span>
            {industry && (
              <span
                style={{
                  fontSize: "14px",
                  color: "#888",
                  marginLeft: "8px",
                }}
              >
                {industry}
              </span>
            )}
          </div>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.15,
              letterSpacing: "-2px",
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
                fontSize: "20px",
                fontWeight: 700,
                color: "#1A1A1A",
                letterSpacing: "-0.5px",
              }}
            >
              CGT
            </span>
          </div>
          <span style={{ fontSize: "16px", color: "#888" }}>
            conguzto.com
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

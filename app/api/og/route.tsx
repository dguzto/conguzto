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
          backgroundColor: "#1A1A1A",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "100%",
            backgroundColor: "#C4703E",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 56px",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#C4703E",
                textTransform: "uppercase",
                letterSpacing: "3px",
                marginBottom: "20px",
              }}
            >
              ANALYSIS #{String(number).padStart(2, "0")}
              {industry ? ` · ${industry}` : ""}
            </span>
            <h1
              style={{
                fontSize: "72px",
                fontWeight: 700,
                color: "#FAFAF8",
                lineHeight: 1.1,
                letterSpacing: "-2px",
                maxWidth: "1000px",
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
            <div
              style={{ display: "flex", alignItems: "center", gap: "14px" }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#C4703E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                C
              </div>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#FAFAF8",
                  letterSpacing: "-0.5px",
                }}
              >
                CGT
              </span>
            </div>
            <span style={{ fontSize: "20px", color: "#666" }}>
              conguzto.com
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

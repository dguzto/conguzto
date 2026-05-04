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
          backgroundColor: "#1A1A1A",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "8px",
            backgroundColor: "#C4703E",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: "40px 80px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#C4703E",
              textTransform: "uppercase",
              letterSpacing: "4px",
              marginBottom: "24px",
            }}
          >
            ANALYSIS #{String(number).padStart(2, "0")}
            {industry ? ` · ${industry}` : ""}
          </span>
          <h1
            style={{
              fontSize: "68px",
              fontWeight: 700,
              color: "#FAFAF8",
              lineHeight: 1.15,
              letterSpacing: "-2px",
              textAlign: "center",
            }}
          >
            {title}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 80px 36px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#C4703E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              C
            </div>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#FAFAF8",
                letterSpacing: "-0.5px",
              }}
            >
              CGT
            </span>
          </div>
          <span style={{ fontSize: "18px", color: "#555" }}>
            conguzto.com
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vance Ventures — Private Holding Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "80px",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#f1f5f9",
            letterSpacing: "-3px",
            lineHeight: 1,
            marginBottom: 28,
          }}
        >
          VANCE VENTURES
        </div>

        {/* Rule */}
        <div
          style={{
            width: 56,
            height: 2,
            background: "#3b82f6",
            marginBottom: 28,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Private Holding Company
        </div>
      </div>
    ),
    { ...size }
  );
}

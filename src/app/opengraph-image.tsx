import { ImageResponse } from "next/og";

export const alt = "Markozy — We Build. We Automate. We Grow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 80% 30%, #6d28d9 0%, #2e1065 30%, #09090F 65%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg,#A78BFA,#8B5CF6,#5B21B6)", display: "flex" }} />
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 8 }}>MARKOZY</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>We Build Digital Experiences That Drive Growth.</div>
          <div style={{ fontSize: 30, color: "#A78BFA", marginTop: 28 }}>We Build. We Automate. We Grow.</div>
        </div>
      </div>
    ),
    size,
  );
}

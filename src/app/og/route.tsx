import { ImageResponse } from "next/og";

/** Per-page share image: /og?title=...&label=... (1200×630). */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || "Your Digital Growth Partner in Malaysia").slice(0, 110);
  const label = (searchParams.get("label") || "Digital Growth Agency · Malaysia").slice(0, 60);

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
          <div style={{ fontSize: 28, color: "#A78BFA", textTransform: "uppercase", letterSpacing: 4 }}>{label}</div>
          <div style={{ fontSize: title.length > 60 ? 60 : 72, fontWeight: 700, lineHeight: 1.08, maxWidth: 1000, marginTop: 20 }}>{title}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "public, max-age=86400, immutable" },
    },
  );
}

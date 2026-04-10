import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(135deg, #f7f5ef 0%, #e8f0e7 45%, #d8e5d2 100%)",
          color: "#1c1c1c",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.42em",
            color: "#7d9b76",
          }}
        >
          ONLINE PILATES
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: "820px",
            }}
          >
            Bedeninizle yeniden baglanti kurun.
          </div>
          <div
            style={{
              fontSize: 28,
              maxWidth: "760px",
              lineHeight: 1.35,
              color: "#40503b",
            }}
          >
            Elvin Ozturk ile online grup ve bireysel Pilates dersleri
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
          }}
        >
          <div>{siteConfig.name}</div>
          <div style={{ color: "#40503b" }}>www.elvinozturk.com</div>
        </div>
      </div>
    ),
    size
  );
}

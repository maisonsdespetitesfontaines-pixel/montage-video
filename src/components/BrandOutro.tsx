import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../config";

export const BrandOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 120 }, from: 0.5, to: 1 });
  const opacity = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const ctaOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });
  const ctaY = interpolate(frame, [30, 50], [24, 0], { extrapolateRight: "clamp" });
  const pulseScale = interpolate(frame % 30, [0, 15, 30], [1, 1.04, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.bgColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${BRAND.primaryColor}30 0%, transparent 65%)`,
        }}
      />
      <div style={{ opacity, transform: `scale(${scale})`, textAlign: "center" }}>
        <div style={{ transform: `scale(${pulseScale})` }}>
          <div
            style={{
              fontSize: 88,
              fontFamily: "Impact, 'Arial Black', sans-serif",
              fontWeight: 900,
              color: BRAND.textColor,
              letterSpacing: 6,
              lineHeight: 1,
              textShadow: `0 0 50px ${BRAND.primaryColor}99`,
            }}
          >
            INFENITI
          </div>
          <div
            style={{
              fontSize: 54,
              fontFamily: "Impact, 'Arial Black', sans-serif",
              fontWeight: 900,
              color: BRAND.primaryColor,
              letterSpacing: 14,
              marginTop: 4,
            }}
          >
            FOOD
          </div>
        </div>
        <div
          style={{
            width: 280,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${BRAND.primaryColor}, ${BRAND.accentColor}, transparent)`,
            margin: "24px auto",
          }}
        />
        <div style={{ opacity: ctaOpacity, transform: `translateY(${ctaY}px)` }}>
          <div
            style={{
              fontSize: 34,
              fontFamily: "'Arial Black', sans-serif",
              fontWeight: 800,
              color: BRAND.accentColor,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Commande maintenant
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 26,
              fontFamily: "sans-serif",
              color: "#ffffffaa",
              letterSpacing: 1,
            }}
          >
            🔥 Disponible maintenant 🔥
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

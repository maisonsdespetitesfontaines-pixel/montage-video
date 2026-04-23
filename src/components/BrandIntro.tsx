import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND } from "../config";

export const BrandIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 12, stiffness: 100 }, from: 0.4, to: 1 });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const lineWidth = interpolate(frame, [20, 50], [0, 340], { extrapolateRight: "clamp" });
  const taglineOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateRight: "clamp" });
  const taglineY = interpolate(frame, [35, 55], [20, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.bgColor, justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${BRAND.primaryColor}22 0%, transparent 70%)`,
          transform: `scale(${scale})`,
        }}
      />
      <div style={{ opacity, transform: `scale(${scale})`, textAlign: "center" }}>
        <div
          style={{
            fontSize: 90,
            fontFamily: "Impact, 'Arial Black', sans-serif",
            fontWeight: 900,
            color: BRAND.textColor,
            letterSpacing: 6,
            lineHeight: 1,
            textShadow: `0 0 40px ${BRAND.primaryColor}88`,
          }}
        >
          INFENITI
        </div>
        <div
          style={{
            fontSize: 56,
            fontFamily: "Impact, 'Arial Black', sans-serif",
            fontWeight: 900,
            color: BRAND.primaryColor,
            letterSpacing: 14,
            marginTop: 4,
          }}
        >
          FOOD
        </div>
        <div
          style={{
            height: 3,
            width: lineWidth,
            background: `linear-gradient(90deg, ${BRAND.primaryColor}, ${BRAND.accentColor})`,
            margin: "18px auto 0",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            color: BRAND.accentColor,
            letterSpacing: 3,
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
          }}
        >
          {BRAND.tagline}
        </div>
      </div>
    </AbsoluteFill>
  );
};

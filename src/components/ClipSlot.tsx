import {
  AbsoluteFill,
  Video,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND, driveUrl } from "../config";

type ClipSlotProps = {
  title: string;
  googleDriveId: string;
  index: number;
};

export const ClipSlot: React.FC<ClipSlotProps> = ({ title, googleDriveId, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isPlaceholder = googleDriveId.startsWith("CLIP_ID");

  const titleScale = spring({ frame, fps, config: { damping: 10, stiffness: 180 }, from: 0.6, to: 1 });
  const titleOpacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });
  const barHeight = interpolate(frame, [5, 25], [0, 100], { extrapolateRight: "clamp" });
  const videoScale = interpolate(frame, [0, 60], [1.05, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      {isPlaceholder ? (
        <AbsoluteFill
          style={{
            background: `linear-gradient(135deg, #1a1a2e ${index * 15}%, #0f3460)`,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ color: "#ffffff33", fontSize: 32, fontFamily: "sans-serif", textAlign: "center" }}>
            📹 {googleDriveId}
          </div>
        </AbsoluteFill>
      ) : (
        <AbsoluteFill style={{ transform: `scale(${videoScale})`, transformOrigin: "center" }}>
          <Video
            src={driveUrl(googleDriveId)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </AbsoluteFill>
      )}
      <AbsoluteFill
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 40,
          bottom: 160,
          width: 5,
          height: `${barHeight}px`,
          maxHeight: 100,
          background: `linear-gradient(180deg, ${BRAND.accentColor}, ${BRAND.primaryColor})`,
          borderRadius: 3,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 150,
          left: 56,
          right: 40,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          transformOrigin: "left bottom",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontFamily: "Impact, 'Arial Black', sans-serif",
            fontWeight: 900,
            color: BRAND.textColor,
            lineHeight: 1.05,
            textTransform: "uppercase",
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          fontSize: 22,
          fontFamily: "Impact, 'Arial Black', sans-serif",
          color: BRAND.primaryColor,
          letterSpacing: 2,
          opacity: 0.85,
        }}
      >
        INFENITI FOOD
      </div>
    </AbsoluteFill>
  );
};

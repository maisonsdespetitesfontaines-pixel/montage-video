import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BRAND } from "../config";

export const FlashTransition: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 3, 5, 8],
    [0, 1, 0.6, 0],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.primaryColor,
        opacity,
      }}
    />
  );
};

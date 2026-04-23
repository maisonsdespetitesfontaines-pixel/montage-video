import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";

type SlideProps = {
  title: string;
  color: string;
};

const Slide: React.FC<SlideProps> = ({ title, color }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{ backgroundColor: color, justifyContent: "center", alignItems: "center" }}
    >
      <h1
        style={{
          color: "white",
          fontSize: 80,
          fontFamily: "sans-serif",
          opacity,
          transform: `translateY(${interpolate(frame, [0, 15], [30, 0], { extrapolateRight: "clamp" })}px)`,
        }}
      >
        {title}
      </h1>
    </AbsoluteFill>
  );
};

export const Montage: React.FC = () => {
  const slideDuration = 90; // 3 seconds at 30fps

  const slides: SlideProps[] = [
    { title: "Scène 1", color: "#1a1a2e" },
    { title: "Scène 2", color: "#16213e" },
    { title: "Scène 3", color: "#0f3460" },
  ];

  return (
    <AbsoluteFill>
      {slides.map((slide, i) => (
        <Sequence key={i} from={i * slideDuration} durationInFrames={slideDuration}>
          <Slide {...slide} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

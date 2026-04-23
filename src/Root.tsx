import "./index.css";
import { Composition } from "remotion";
import { Montage } from "./Montage";

const SLIDES = 3;
const SLIDE_DURATION = 90; // 3s at 30fps

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Montage"
        component={Montage}
        durationInFrames={SLIDES * SLIDE_DURATION}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};

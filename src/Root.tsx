import "./index.css";
import { Composition } from "remotion";
import { Montage, totalDuration } from "./Montage";
import { VIDEO } from "./config";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="InfenitiFood"
        component={Montage}
        durationInFrames={totalDuration}
        fps={VIDEO.fps}
        width={VIDEO.width}
        height={VIDEO.height}
      />
    </>
  );
};

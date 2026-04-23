import { AbsoluteFill, Sequence } from "remotion";
import { CLIPS, VIDEO, totalDuration } from "./config";
import { BrandIntro } from "./components/BrandIntro";
import { BrandOutro } from "./components/BrandOutro";
import { ClipSlot } from "./components/ClipSlot";
import { FlashTransition } from "./components/FlashTransition";

export { totalDuration };

export const Montage: React.FC = () => {
  const { introDuration, clipDuration, flashDuration, outroDuration } = VIDEO;

  const blockSize = clipDuration + flashDuration;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Sequence from={0} durationInFrames={introDuration}>
        <BrandIntro />
      </Sequence>

      {CLIPS.map((clip, i) => {
        const blockStart = introDuration + i * blockSize;
        return (
          <Sequence key={i} from={blockStart} durationInFrames={blockSize}>
            <Sequence from={0} durationInFrames={flashDuration}>
              <FlashTransition />
            </Sequence>
            <Sequence from={flashDuration} durationInFrames={clipDuration}>
              <ClipSlot title={clip.title} googleDriveId={clip.googleDriveId} index={i} />
            </Sequence>
          </Sequence>
        );
      })}

      <Sequence from={totalDuration - outroDuration} durationInFrames={outroDuration}>
        <BrandOutro />
      </Sequence>
    </AbsoluteFill>
  );
};

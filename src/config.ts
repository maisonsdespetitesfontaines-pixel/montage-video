export const BRAND = {
  name: "INFENITI FOOD",
  tagline: "Le goût infini",
  primaryColor: "#FF6B00",   // orange vif
  accentColor: "#FFD700",    // or
  bgColor: "#0A0A0A",        // noir profond
  textColor: "#FFFFFF",
};

export const VIDEO = {
  width: 1080,
  height: 1920,
  fps: 30,
  introDuration: 60,    // 2s
  clipDuration: 60,     // 2s par clip
  flashDuration: 8,     // 0.27s flash entre clips
  outroDuration: 75,    // 2.5s
};

// Remplace les id par tes vrais ID Google Drive
// Lien direct : https://drive.google.com/uc?export=download&id=TON_ID
export const CLIPS: { title: string; googleDriveId: string }[] = [
  { title: "TASTY BOOM",      googleDriveId: "CLIP_ID_1" },
  { title: "INFENITI WINGS",  googleDriveId: "CLIP_ID_2" },
  { title: "GOLD BURGER",     googleDriveId: "CLIP_ID_3" },
  { title: "FIRE SAUCE",      googleDriveId: "CLIP_ID_4" },
  { title: "CRISPY DROP",     googleDriveId: "CLIP_ID_5" },
  { title: "STREET VIBES",    googleDriveId: "CLIP_ID_6" },
];

export const driveUrl = (id: string) =>
  `https://drive.google.com/uc?export=download&id=${id}`;

export const totalDuration =
  VIDEO.introDuration +
  CLIPS.length * (VIDEO.clipDuration + VIDEO.flashDuration) +
  VIDEO.outroDuration;

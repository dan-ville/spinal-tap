// The seven learning tracks, in reading order. Shared by the home page, /learn/ and each track index.
export const tracks = [
  { id: 'anatomy', name: 'Anatomy', blurb: 'The lumbar spine, pelvis and hip: bones, discs, joints, ligaments, muscles, nerves.' },
  { id: 'biomechanics', name: 'Biomechanics', blurb: 'Loads, moments and tissue tolerance under lifting and daily movement.' },
  { id: 'pain-science', name: 'Pain science', blurb: 'What pain is, what it is not, and why hurt is not the same as harm.' },
  { id: 'pathology', name: 'Pathology', blurb: 'Disc, facet, nerve-root and bone findings: terminology, natural history, red flags.' },
  { id: 'rehab', name: 'Rehab', blurb: 'Graded exposure, load management and return to lifting.' },
  { id: 'training-science', name: 'Training science', blurb: 'Dose, progression and adaptation for strength.' },
  { id: 'self-coaching', name: 'Self-coaching', blurb: 'Writing your own blocks, regressions and daily decisions.' },
] as const;

export type TrackId = (typeof tracks)[number]['id'];
export const trackName = (id: string) => tracks.find((t) => t.id === id)?.name ?? id;

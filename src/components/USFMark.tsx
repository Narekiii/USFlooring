export default function USFMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" fill="#6B4A2D" />
      <rect x="7" y="10" width="22" height="2.5" fill="#F5F1EA" />
      <rect x="7" y="16.75" width="22" height="2.5" fill="#F5F1EA" />
      <rect x="7" y="23.5" width="22" height="2" fill="#C89B5A" />
    </svg>
  );
}

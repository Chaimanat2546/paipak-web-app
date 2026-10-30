/** LINE glyph from Simple Icons (CC0): https://simpleicons.org/?q=line */
export function LineIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

/** Small vector social glyphs; demo buttons never navigate to another brand. */
export function SocialIcon({ name }: { name: string }) {
  if (name === "LINE") return <LineIcon />;
  if (name === "Instagram")
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  if (name === "YouTube")
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="currentColor"
      >
        <path d="M22 7a4 4 0 0 0-3-3c-2-.5-12-.5-14 0a4 4 0 0 0-3 3c-.5 2-.5 8 0 10a4 4 0 0 0 3 3c2 .5 12 .5 14 0a4 4 0 0 0 3-3c.5-2 .5-8 0-10ZM10 16V8l7 4Z" />
      </svg>
    );
  if (name === "Facebook")
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="currentColor"
      >
        <path d="M14 22v-9h3l.5-4H14V7c0-1 .4-2 2-2h2V1.5a20 20 0 0 0-3-.2c-3 0-5 1.8-5 5.2V9H7v4h3v9Z" />
      </svg>
    );
  if (name === "TikTok")
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="currentColor"
      >
        <path d="M15 2h3c.3 3 2 4.5 5 5v3c-2 0-3.7-.6-5-1.7V16a7 7 0 1 1-7-7v3a4 4 0 1 0 4 4Z" />
      </svg>
    );
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M21 11.5a9 9 0 0 1-9 9 11 11 0 0 1-3-.5L3 22l1.5-5a9 9 0 1 1 16.5-5.5Z" />
    </svg>
  );
}

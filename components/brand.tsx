/** paipak demo wordmark, shared by navigation, footer and member previews. */
export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`brand inline-flex flex-col text-left leading-none${compact ? " brand-compact" : ""}`}
      aria-label="paipak Pool Villa"
    >
      <span className="text-[32px] font-bold tracking-[.04em] text-white sm:text-[38px]">
        pai<span className="text-brand-yellow">pak.</span>
      </span>
      <span className="mt-1 text-[9px] font-medium tracking-[.29em] text-white/85 sm:text-[10px]">
        POOL VILLA
      </span>
    </span>
  );
}

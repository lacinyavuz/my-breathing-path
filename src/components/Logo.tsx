type LogoProps = { className?: string; showWordmark?: boolean; size?: number };

export function Logo({
  className = "",
  showWordmark = true,
  size = 36,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="My Breathing Path logo"
        width={size}
        height={size}
        className="shrink-0 rounded-full"
        style={{ width: size, height: size }}
      />
      {showWordmark && (
        <span className="font-display text-base tracking-tight">
          My Breathing Path
        </span>
      )}
    </div>
  );
}

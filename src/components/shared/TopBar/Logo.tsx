const Logo = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-foreground text-background"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#A855F7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-box-icon"
        >
          <defs>
            <filter id="purple-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g filter="url(#purple-glow)">
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </g>
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-foreground">Kalki UI</span>
        <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Components
        </span>
      </div>
    </div>
  );
};

export default Logo;

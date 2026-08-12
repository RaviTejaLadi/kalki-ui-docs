import Link from '@/components/common/Link';
import Logo from '@/components/shared/TopBar/Logo';

export const FooterSection = () => {
  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="container flex flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <Link to="/" className="inline-flex items-center" aria-label="Kalki UI">
          <Logo />
        </Link>

        <p className="text-xs text-muted-foreground">
          Designed and developed by{' '}
          <Link
            target="_blank"
            to="https://ravitejaladi.vercel.app/"
            className="font-medium text-foreground transition-colors hover:text-primary"
            aria-label="Ravi Teja Ladi"
          >
            Ravi Teja Ladi
          </Link>
        </p>
      </div>
    </footer>
  );
};

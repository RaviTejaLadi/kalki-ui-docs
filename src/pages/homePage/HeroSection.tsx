import { Badge, Button, Link } from 'kalki-ui';
import { ArrowRight } from 'lucide-react';
import { FloatingShapes } from './FloatingShapes';
import { ReactLogo, TailwindLogo, TypeScriptLogo } from './Logos';
import { TextReveal } from './animations/TextReveal';
import { GradientText } from './animations/GradientText';

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden border-b border-border/60">
      <FloatingShapes />
      <div className="relative mx-auto grid max-w-screen-xl place-items-center gap-8 px-6 py-24 md:py-32 lg:px-8">
        <div className="space-y-8 text-center">
          <TextReveal delay={100}>
            <div className="flex items-center justify-center gap-5 opacity-80">
              <ReactLogo />
              <TypeScriptLogo />
              <TailwindLogo />
            </div>
          </TextReveal>

          <TextReveal delay={200}>
            <Badge
              variant="outline"
              size="sm"
              className="rounded-full border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur"
            >
              50+ production-ready components
            </Badge>
          </TextReveal>

          <TextReveal delay={350}>
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <GradientText delay={400}>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">Kalki UI</h1>
              </GradientText>
              <p className="mx-auto max-w-xl text-balance text-base font-medium text-muted-foreground md:text-lg">
                A TypeScript-first React component library built with Tailwind CSS — accessible, composable, and ready
                for production.
              </p>
            </div>
          </TextReveal>

          <TextReveal delay={550}>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/get-started">
                <Button size="sm" className="min-w-[10rem] group/arrow font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover/arrow:translate-x-0.5" />
                </Button>
              </Link>
              <Link to="https://github.com/RaviTejaLadi/kalki-ui" target="_blank">
                <Button size="sm" variant="outline" className="min-w-[10rem] font-semibold">
                  View on GitHub
                </Button>
              </Link>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Link from '@/components/common/Link';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FloatingShapes } from './FloatingShapes';
import { ReactLogo, TailwindLogo, TypeScriptLogo } from './Logos';
import { TextReveal } from './animations/TextReveal';
import { GradientText } from './animations/GradientText';

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="w-full relative sm:px-6 lg:px-8 overflow-hidden">
      <FloatingShapes />
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="flex justify-center items-center gap-6 ">
            <ReactLogo />
            <TypeScriptLogo />
            <TailwindLogo />
          </div>
          <TextReveal delay={200}>
            <Badge variant={theme ? 'light' : 'dark'} className="text-sm dark:bg-gray-200/10 rounded-full py-2">
              <span className=" text-primary">
                <Badge variant="outline" className="bg-indigo-50 text-blue rounded-full tracking-wide">
                  <Sparkles className="w-4 h-4 " />
                  50 +
                </Badge>
              </span>
              <span className="tracking-wide text-foreground dark:text-gray"> Production-Ready Components </span>
            </Badge>
          </TextReveal>

          <TextReveal delay={400}>
            <div className="max-w-screen-md space-y-4 mx-auto text-center  font-bold">
              <GradientText delay={600}>
                <h1 className="px-2 text-purple-400 text-4xl tracking-wide md:text-6xl">Kalki UI</h1>
              </GradientText>
              <h6 className="text-xl md:text-xl text-foreground">Build using Tsx and Tailwind css</h6>
            </div>
          </TextReveal>
          <TextReveal delay={600}>
            <p className="max-w-screen-sm mx-auto text-xl tracking-wide text-muted-foreground">
              Build stunning web applications faster than ever with our modern, accessible, and fully customizable
              components. ✨
            </p>
          </TextReveal>
          <TextReveal delay={800}>
            <p className="max-w-screen-sm mx-auto text-xl tracking-wide text-muted-foreground">
              Best Package For All Your Ui Needs
            </p>
          </TextReveal>
          <TextReveal delay={1000}>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Link to="/get-started">
                <Button
                  size="xs"
                  variant="outline"
                  className="w-5/6 md:w-1/4 text-foreground text-xs hover:text-purple-400 dark:bg-inherit font-bold group/arrow"
                >
                  Get Started
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Button size="xs" variant="ghost" className="w-5/6 md:w-1/4 text-black hover:text-purple-400 font-bold">
                <Link
                  className="text-xs text-dark dark:text-white"
                  to="https://github.com/nobruf/shadcn-landing-page.git"
                  target="_blank"
                >
                  Github repository
                </Link>
              </Button>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

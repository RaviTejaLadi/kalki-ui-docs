import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Link from '@/components/common/Link';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant={'light'} className="text-sm rounded-full py-2">
            <span className="mr-2 text-primary">
              <Badge variant={'help'} className="rounded-full tracking-wide">
                New
              </Badge>
            </span>
            <span className="tracking-wide text-foreground"> Beautiful UI components </span>
          </Badge>

          <div className="max-w-screen-md space-y-4 mx-auto text-center  font-bold">
            <h1 className="px-2 text-purple-300 text-4xl tracking-wide md:text-6xl">UI Essentials React</h1>
            <h6 className="text-2xl md:text-3xl text-foreground">Build using Tsx and Tailwind css</h6>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl tracking-wide text-muted-foreground">
            {`Best Package For All Your Ui Needs`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/get-started">
              <Button
                size="xs"
                variant={'outline'}
                className="w-5/6 md:w-1/4 text-foreground text-xs hover:text-purple-400 font-bold group/arrow"
              >
                Get Started
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button size="xs" variant={'ghost'} className="w-5/6 md:w-1/4 text-black hover:text-purple-400 font-bold">
              <Link className="text-xs" to="https://github.com/nobruf/shadcn-landing-page.git" target="_blank">
                Github respository
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

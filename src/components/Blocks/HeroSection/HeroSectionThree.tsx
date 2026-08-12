import { Badge, Button, Link } from 'kalki-ui';
import { ArrowRight } from 'lucide-react';

const HeroSectionThree = () => {
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold dark:text-white">
            <h1>
              Experience the
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Kalki UI
              </span>
              components
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`We're more than just a tool, we're a community of passionate
          creators. Get access to exclusive resources, tutorials, and support.`}
          </p>

          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button className="w-full max-w-xs font-bold group/arrow text-sm sm:w-auto sm:min-w-[10rem]">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button variant="outline" className="w-full max-w-xs font-bold sm:w-auto sm:min-w-[10rem]">
              <Link
                to="https://github.com/nobruf/shadcn-landing-page.git"
                className="text-sm text-white hover:text-white"
                target="_blank"
              >
                Github repository
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionThree;

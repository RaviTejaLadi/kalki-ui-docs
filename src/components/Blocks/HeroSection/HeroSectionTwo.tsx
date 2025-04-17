import Div from '@/components/common/Div';
import Image from '@/components/common/Image';
import Link from '@/components/common/Link';
import { Heading, Paragraph } from '@/components/common/Typography';
import { ArrowRight } from 'lucide-react';
import placeholder from '../../../assets/placeholder.svg';

const HeroSectionTwo = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <Div className="mr-auto place-self-center lg:col-span-7">
          <Heading
            as="h1"
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-wide leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Payments tool for software companies
          </Heading>
          <Paragraph className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their
            payment stack.
          </Paragraph>
          <Link
            to="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-900  dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <ArrowRight className="ml-2 size-4" />
          </Link>
          <Link
            to="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </Link>
        </Div>
        <Div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={placeholder} alt="mockup" />
        </Div>
      </Div>
    </section>
  );
};

export default HeroSectionTwo;

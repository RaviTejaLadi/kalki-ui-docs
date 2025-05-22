import Link from '@/components/common/Link';
import Logo from '@/components/shared/TopBar/Logo';
// import { ChevronsDownIcon } from 'lucide-react';
// import React from 'react';

// interface link {
//   label: string;
//   to: string;
// }
// interface FooterLinksProps {
//   title: string;
//   links: link[];
// }

// const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
//   <div className="flex flex-col gap-2">
//     <h3 className="font-semibold text-base text-purple-500">{title}</h3>
//     {links.map((link, index) => (
//       <div key={index}>
//         <Link to={link.to} className="text-xs text-foreground">
//           {link.label}
//         </Link>
//       </div>
//     ))}
//   </div>
// );

export const FooterSection = () => {
  // const contactLinks = [
  //   { label: 'Github', to: '#' },
  //   { label: 'Twitter', to: '#' },
  //   { label: 'Instagram', to: '#' },
  // ];

  // const helpLinks = [
  //   { label: 'Contact Us', to: '#' },
  //   { label: 'FAQ', to: '#' },
  //   { label: 'Feedback', to: '#' },
  // ];

  return (
    <footer className="mx-10 pt-24 sm:pt-32 sm:pb-10">
      <div className="p-10 w-full border dark:border-gray-200/10 rounded-lg">
        <div className="flex justify-between items-center">
          {/* Brand Section */}
          <div>
            <Link to="#" className="flex font-bold items-center text-purple-500 " aria-label="Kalki UI React">
              <Logo />
            </Link>
          </div>

          <div className="flex gap-20">
            <section className="text-xs">
              <h3 className="text-foreground">
                Designed and developed by
                <Link
                  target="_blank"
                  to="https://ravitejaladi.vercel.app/"
                  className="transition-all text-xs text-purple-500 italic border-primary hover:border-b-2 ml-1"
                  aria-label="Ravi Teja Ladi"
                >
                  @ Ravi Teja Ladi
                </Link>
              </h3>
            </section>
          </div>
          {/* Links Section */}
          {/* <div className="flex gap-20">
            <FooterLinks title="Contact" links={contactLinks} />
            <FooterLinks title="Help" links={helpLinks} />
          </div> */}
        </div>

        {/* <hr className="my-6 dark:border-gray-200/10" /> */}

        {/* Copyright Section */}
        {/* <section className="text-xs">
          <h3 className="text-foreground">
            Designed and developed by
            <Link
              target="_blank"
              to="#"
              className="transition-all text-xs text-purple-500 italic border-primary hover:border-b-2 ml-1"
              aria-label="Ravi Teja Ladi"
            >
              @ Ravi Teja Ladi
            </Link>
          </h3>
        </section> */}
      </div>
    </footer>
  );
};

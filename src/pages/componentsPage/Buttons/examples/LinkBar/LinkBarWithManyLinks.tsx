import LinkBar from '@/components/common/LinkBar/LinkBar';
import { useState } from 'react';

const LinkBarWithManyLinks = () => {
  const [activeUrl, setActiveUrl] = useState('/home');

  const handleUrlChange = (to: string) => {
    setActiveUrl(to);
  };
  interface Link {
    label: string;
    to: string;
    icon?: string;
  }
  const links: Link[] = [
    { label: 'JavaScript', to: '/javascript', icon: '✨' },
    { label: 'Python', to: '/python', icon: '🐍' },
    { label: 'Java', to: '/java' },
    { label: 'C++', to: '/cpp', icon: '💻' },
    { label: 'C#', to: '/csharp', icon: '🔧' },
    { label: 'Ruby', to: '/ruby', icon: '💎' },
    { label: 'Swift', to: '/swift' },
    { label: 'Go', to: '/go', icon: '🚀' },
    { label: 'Kotlin', to: '/kotlin' },
    { label: 'PHP', to: '/php', icon: '🐘' },
    { label: 'TypeScript', to: '/typescript' },
    { label: 'Scala', to: '/scala', icon: '📐' },
    { label: 'R', to: '/r', icon: '📊' },
    { label: 'Perl', to: '/perl' },
    { label: 'Haskell', to: '/haskell', icon: '🔢' },
    { label: 'Rust', to: '/rust', icon: '🦀' },
    { label: 'Elixir', to: '/elixir' },
    { label: 'Dart', to: '/dart', icon: '🎯' },
    { label: 'Lua', to: '/lua' },
    { label: 'Clojure', to: '/clojure', icon: '🔗' },
    { label: 'F#', to: '/fsharp' },
    { label: 'Matlab', to: '/matlab', icon: '📈' },
    { label: 'Julia', to: '/julia', icon: '📊' },
    { label: 'Erlang', to: '/erlang' },
    { label: 'Objective-C', to: '/objective-c', icon: '🍏' },
    { label: 'Groovy', to: '/groovy', icon: '🎵' },
    { label: 'Fortran', to: '/fortran' },
    { label: 'Ada', to: '/ada', icon: '🏛️' },
    { label: 'COBOL', to: '/cobol' },
    { label: 'Visual Basic', to: '/visual-basic', icon: '🖥️' },
    { label: 'Scheme', to: '/scheme' },
    { label: 'Prolog', to: '/prolog', icon: '🤖' },
    { label: 'Lisp', to: '/lisp' },
    { label: 'Shell', to: '/shell', icon: '🐚' },
    { label: 'VHDL', to: '/vhdl' },
    { label: 'Verilog', to: '/verilog', icon: '🔌' },
    { label: 'Racket', to: '/racket' },
    { label: 'Smalltalk', to: '/smalltalk', icon: '💬' },
    { label: 'Pascal', to: '/pascal' },
    { label: 'ABAP', to: '/abap', icon: '🏢' },
    { label: 'SAS', to: '/sas' },
  ];
  return (
    <LinkBar
      variant="default"
      size="sm"
      rounded="none"
      activeUrl={activeUrl}
      onUrlChange={handleUrlChange}
      className="w-full  mx-auto "
    >
      <LinkBar.Control position="left" />

      <LinkBar.Content className="px-2">
        {links.map((link, index) => (
          <LinkBar.Link key={index} to={`#-${link.to}`} icon={link.icon}>
            {link.label}
          </LinkBar.Link>
        ))}
      </LinkBar.Content>

      <LinkBar.Control position="right" />
    </LinkBar>
  );
};

export default LinkBarWithManyLinks;

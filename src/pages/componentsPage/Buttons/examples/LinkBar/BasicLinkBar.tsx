import LinkBar from "@/components/common/LinkBar/LinkBar";

const BasicLinkBar = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];
  return <LinkBar links={links} currentPath="/" />;
};

export default BasicLinkBar;

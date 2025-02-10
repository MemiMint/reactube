import React, { FC } from "react";
import { SiFacebook, SiX, SiInstagram } from "react-icons/si";

type LinkItem = {
  content: string | React.ReactNode;
  href: string;
};

const NAVIGATION_LINKS: LinkItem[] = [
  { content: "Home", href: "#" },
  { content: "About", href: "#" },
  { content: "Contact", href: "#" },
  { content: "Support", href: "#" },
];

const SOCIAL_MEDIA: LinkItem[] = [
  { content: <SiFacebook />, href: "#" },
  { content: <SiX />, href: "#" },
  { content: <SiInstagram />, href: "#" },
];

const NavigationList: FC<{ links: LinkItem[] }> = ({ links }) => (
  <nav className="flex gap-6 text-sm font-medium">
    {links.map((link, index) => (
      <a
        key={index}
        href={link.href}
        className="hover:text-red-400 transition-colors"
      >
        {link.content}
      </a>
    ))}
  </nav>
);

const SocialMedia: FC<{ links: LinkItem[] }> = ({ links }) => (
  <div className="flex gap-4">
    {links.map((link, index) => (
      <a
        key={index}
        href={link.href}
        className="hover:text-red-400 transition-colors"
      >
        {link.content}
      </a>
    ))}
  </div>
);

const BottomSection = () => (
  <div className="text-center text-sm text-gray-400">
    <p>© {new Date().getFullYear()} Reactube. All rights reserved.</p>
    <div className="flex justify-center gap-4 mt-2">
      <a href="#" className="hover:text-red-400 transition-colors">
        Privacy Policy
      </a>
      <a href="#" className="hover:text-red-400 transition-colors">
        Terms of Service
      </a>
    </div>
  </div>
);

export const Footer = () => (
  <footer className="bg-gray-900 text-white py-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-wrap justify-between items-center">
        <h2 className="text-2xl font-primary font-semibold">Reactube</h2>
        <NavigationList links={NAVIGATION_LINKS} />
        <SocialMedia links={SOCIAL_MEDIA} />
      </div>
      <div className="border-t border-gray-700 my-6"></div>
      <BottomSection />
    </div>
  </footer>
);

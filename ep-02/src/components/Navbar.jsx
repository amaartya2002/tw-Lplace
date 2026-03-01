import React from "react";
import { IconMenu2, IconChevronRight } from "@tabler/icons-react";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="sticky inset-x-0 top-0 z-15 h-16 bg-transparent backdrop-blur-xl">
      <nav className="relative mx-auto flex w-full items-center justify-between pt-3 md:max-w-5xl">
        <div className="my-1 ml-6 rounded-full">
          <img
            src="./src/assets/chai.png"
            alt="Mascot"
            className="h-8 w-8 rounded-full"
          />
        </div>

        <div className="mr-4 hidden items-center justify-between gap-2 text-sm text-neutral-800 md:flex">
          {navLinks.map((link, key) => {
            return (
              <div key={key} className="px-4 hover:text-neutral-300">
                <a href={link.href}>{link.name}</a>
              </div>
            );
          })}
        </div>

        <button
          className="outline:none my-1 mr-4 rounded-lg border border-neutral-100 bg-blue-300 px-2 py-0.5 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IconMenu2 className="h-4 w-4 rounded-md" />
        </button>

        {isMenuOpen && (
          <div className="shadow-nav absolute inset-x-0 top-12 mx-auto h-52 w-full max-w-[95%] rounded-md border-white/40 bg-white/55 backdrop-blur-md md:hidden">
            <div className="flex w-full flex-col gap-4 pt-4 text-base text-neutral-800">
              {navLinks.map((link, key) => {
                return (
                  <div
                    key={key}
                    className="flex items-center justify-between gap-2 px-4 hover:text-neutral-900"
                  >
                    <a href={link.href}>{link.name}</a>
                    <IconChevronRight className="h-4 w-4" />
                  </div>
                );
              })}
            </div>
            <div className="mx-auto mt-[20px] h-px w-[95%] bg-neutral-400"></div>
            <div className="mt-4 flex w-full items-center justify-center">
              <button className="w-full max-w-[95%] cursor-pointer rounded-[8px] bg-neutral-800 py-1 text-neutral-100 hover:bg-neutral-900">
                Dashboard
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

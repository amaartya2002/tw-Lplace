import React from "react";

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

  return (
    <nav className="shadow-nav mx-auto mt-4 flex w-full max-w-[400px] justify-between border border-neutral-100 bg-white md:max-w-3xl lg:rounded-full">
      <div className="ml-4 rounded-full py-0.5">
        <img
          src="./src/assets/chai.png"
          alt="Mascot"
          className="h-8 w-8 rounded-full"
        />
      </div>

      <div className="mr-2 flex items-center justify-between gap-2 text-sm text-neutral-500">
        {navLinks.map((link, key) => {
          return (
            <div key={key} className="px-4 hover:text-neutral-900">
              <a href={link.href}>{link.name}</a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

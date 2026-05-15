"use client";

import React from "react";
import PropTypes from "prop-types";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  CpuChipIcon,
  RectangleGroupIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  { name: "Home",     icon: HomeIcon,             href: "#" },
  { name: "Skills",   icon: CpuChipIcon,           href: "#skills" },
  { name: "Projects", icon: RectangleGroupIcon,    href: "#projects" },
  { name: "Resume",   icon: AcademicCapIcon,       href: "#resume" },
  { name: "Contact",  icon: EnvelopeIcon,          href: "#contact" },
];

function NavItem({ children, href }) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className={`border-0 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="blue-gray" className="text-2xl font-bold tracking-tight">
          P Sriram Mayan
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://github.com/SRIRAMMAYAN" target="_blank" rel="noreferrer">
            <Button color="gray">GitHub</Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={() => setOpen((c) => !c)}
          className="ml-auto inline-block lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4">
            <a href="https://github.com/SRIRAMMAYAN" target="_blank" rel="noreferrer">
              <Button color="gray">GitHub</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;

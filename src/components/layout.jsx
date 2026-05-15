"use client";

import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

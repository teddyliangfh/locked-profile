import "@testing-library/jest-dom";
import React from "react";
global.React = React;

// window.matchMedia mock for Chakra/next-themes
if (!window.matchMedia) {
  window.matchMedia = function () {
    return {
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
      onchange: null,
      media: "",
    };
  };
} 
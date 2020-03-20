/// <reference types="react-scripts" />

declare module "tailwind.macro";
declare module "tailwindcss/resolveConfig";

declare namespace JSX {
  interface IntrinsicElements {
    [tagName: string]: any;
  }
}

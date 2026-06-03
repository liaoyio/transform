export const prettierParsers = {
  css: "postcss",
  javascript: "babel",
  jsx: "babel",
  svg: "html",
  typescript: "typescript"
};

export const supportedLanguages = [
  "json",
  "babylon",
  "html",
  "postcss",
  "markdown",
  "typescript",
  ...Object.keys(prettierParsers)
];

const tailwindConfig = require("@cafeta/components-react/tailwind.config");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    ...tailwindConfig.theme,
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Lato", ...defaultTheme.fontFamily.sans]
    }
  }
};

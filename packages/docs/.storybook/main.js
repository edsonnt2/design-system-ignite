import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.tsx",
  ],
  previewHead: (head) => `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ${head}
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
  `,
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

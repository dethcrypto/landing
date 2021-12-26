// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "dΞth",
  tagline: "Ethereum dev tools",
  url: "https://deth.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "dethcrypto", // Usually your GitHub org/user name.
  projectName: "dethcrypto", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/dethcrypto/landing",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "dΞth",
        logo: {
          alt: "deth",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://github.com/dethcrypto",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://twitter.com/dethcrypto",
            label: "Twitter",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/wQDkeDgzgv",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/dethcrypto",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/dethcrypto",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} dΞth`,
      },
      prism: {
        theme: darkCodeTheme,
        disableSwitch: true,
        // darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
};

module.exports = config;

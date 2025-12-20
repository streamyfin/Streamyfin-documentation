import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Streamyfin',
  tagline: 'A modern Jellyfin client built with Expo for seamless streaming on iOS and Android',
  favicon: '/static/img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.streamyfin.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'streamyfin', // Usually your GitHub org/user name.
  projectName: 'Streamyfin-documentation', // Usually your repo name.

 // onBrokenLinks: 'throw',
 // onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Streamyfin Documentation',
      logo: {
        alt: 'Streamyfin',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Browse',
        },
        {
          href: 'https://github.com/streamyfin/streamyfin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/streamyfin/streamyfin',
            },
            {
              label: 'Website',
              href: 'https://www.streamyfin.app',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/aJvAYeycyY',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'View Open Issues',
              href: 'https://github.com/streamyfin/streamyfin/issues',
            },
            {
              label: 'Feature reques',
              href: 'https://github.com/streamyfin/streamyfin/issues/new?template=feature_request.md',
            },
            {
              label: 'Report a bug',
              href: 'https://github.com/streamyfin/streamyfin/issues/new?template=bug_report.yml',
            },
          ],
        },
      ],
      copyright: `As experimental as your playlist`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

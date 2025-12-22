import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // StreamyFin Documentation Sidebar
  tutorialSidebar: [
    'getting-started',
    'installation',
    'features',
    'beta-testing',
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide/setup',
        'user-guide/streaming',
        'user-guide/downloads',
        'user-guide/chromecast',
        'user-guide/settings',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        'advanced/troubleshooting',
        'advanced/streamyfin-plugin',
        'advanced/seerr-integration',
        'advanced/jellysearch',
        'advanced/plugin',
        'advanced/optimized-versions-server',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/setup',
        'development/contributing',
        'development/building',
      ],
    },
    'faq',
  ],
};

export default sidebars;

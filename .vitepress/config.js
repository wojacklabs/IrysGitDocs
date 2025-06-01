import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'IrysGit & GitHirys Docs',
  description: 'Complete documentation for IrysGit CLI and GitHirys web platform - Decentralized Git ecosystem for Web3',
  base: '/',
  cleanUrls: true,
  outDir: '.vitepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/sprite_favicon.webp' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Commands', link: '/api/commands' },
      { text: 'Examples', link: '/examples/quick-start' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'Configuration', link: '/guide/configuration' }
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'How It Works', link: '/guide/how-it-works' },
            { text: 'Permissions', link: '/guide/permissions' },
            { text: 'Security', link: '/guide/security' },
            { text: 'URL Format', link: '/guide/url-format' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Commands Overview', link: '/api/commands' },
            { text: 'Repository Management', link: '/api/repository' },
            { text: 'Branch Operations', link: '/api/branches' },
            { text: 'Collaboration', link: '/api/collaboration' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Quick Start', link: '/examples/quick-start' },
            { text: 'Team Collaboration', link: '/examples/collaboration' },
            { text: 'Advanced Workflows', link: '/examples/advanced' }
          ]
        }
      ]
    },
    socialLinks: [],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 IrysGit & GitHirys'
    },
    editLink: {
      pattern: 'https://github.com/your-username/irysgit-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
}) 
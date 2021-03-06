/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Kirtan',
    image: '/img/awesome-android.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Awesome Android' /* title for your website */,
  tagline: 'Useful libraries, articles and all the awesome things about Android!',
  url: 'https://github.com/kirtan403/awesome-android' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'awesome-android',
  projectLogo: 'img/awesome-android.svg',
  headerLinks: [
    {doc: 'proguard-snippets', label: 'Docs'}
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/awesome-android.svg',
  footerIcon: 'img/awesome-android.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Kirtan Thakkar',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/kirtan403/awesome-android',
};

module.exports = siteConfig;

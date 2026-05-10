/**
 * ============================================================================================
 * File: home.js                                                                              *
 * Author: Andrew Scott Zimmerman                                                             *
 * Copyright: Copyright © Andrew Zimmerman 2026                                               *
 * Description: Data for homeCards on the home.vue page. Each card links to a page, has an    *
 * an image, and a description.                                                               *
 * ============================================================================================
 */
export const homeCards = [
  {
    to: '/about',
    title: 'About',
    description: "What I do, who I am, and what I'm looking for.",
    image: '/images/card-about.jpg'
  },
  {
    to: '/projects',
    title: 'Projects',
    description: "Software I've built to explore problems in finance and markets.",
    image: '/images/card-projects.jpg'
  },
  {
    to: '/resume',
    title: 'Resume',
    description: 'My experience, education, and credentials.',
    image: '/images/card-resume.jpg'
  },
  {
    to: '/connect',
    title: 'Connect',
    description: 'Professional contact and links.',
    image: '/images/card-connect.jpg'
  }
]
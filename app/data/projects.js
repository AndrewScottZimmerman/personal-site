/**
 * ============================================================================================
 * File: projects.js                                                                          *
 * Author: Andrew Scott Zimmerman                                                             *
 * Copyright: Copyright © Andrew Zimmerman 2026                                               *
 * Description: Data for the projects used for the ProjectCard componenent.                   *
 * ============================================================================================
 *  Fields:
 *  --------
 *  Optional fields, null accepted. Cards with null URLs hide their action button. Null images
 *  result in a "Coming Soon" placeholder.
 *  @typedef {object} Project
 *  @property {string} title
 *  @property {string} description
 *  @property {string[]} techStack
 *  @property {string|null} image
 *  @property {string|null} projectUrl
 *  @property {string|null} githubUrl
*/



/**
 * Helper:
 * -------
 * Used while projects are still in development. Returns a placeholder project object.
 * @param {string} title 
 * @returns {Project}
 */
const placeholder = (title) => ({
  title,
  description: 'This is some example text describing this project.',
  techStack: ['Vue', 'AWS', 'Lambda'],
  image: null,
  projectUrl: null,
  githubUrl: null
})

/** @type {Project[]} */
export const projects = [
  placeholder('Project 1'),
  placeholder('Project 2'),
  placeholder('Project 3'),
  placeholder('Project 4'),
  placeholder('Project 5'),
  placeholder('Project 6')
]

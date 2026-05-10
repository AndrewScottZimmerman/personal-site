/**
 * ============================================================================================
 * File: resume.js                                                                            *
 * Author: Andrew Scott Zimmerman                                                             *
 * Copyright: Copyright © Andrew Zimmerman 2026                                               *
 * Description: Data for the resume.                                                          *
 * ============================================================================================
 *  Fields:
 *  --------
 *  @typedef {object} JobEntry
 *  @property {string} title
 *  @property {string} company
 *  @property {string} location
 *  @property {string} dates
 *  @property {string[]} bullets
*/

/** @type {JobEntry[]} */
export const experience = [
  {
    title: 'Wealth Management Service Specialist',
    company: 'Fidelity Investments, Wealth',
    location: 'Greenwood Village, CO',
    dates: '2025 – Present',
    bullets: [
      'Support advisor teams and clients across transfer of assets, account maintenance, money movement, and complex service situations, acting as case manager from intake through resolution.',
      'Largest account handled: ~$95 million.  Largest transaction handled: ~$45 million.',
      'Bridge operations and service functions to streamline complex requests for advisor partners and clients.'
    ]
  },
  {
    title: 'Customer Relationship Advocate',
    company: 'Fidelity Investments, Brokerage',
    location: 'Greenwood Village, CO',
    dates: '2023 – 2025',
    bullets: [
      'Executed client trade orders across stocks, options, ETFs, and mutual funds; largest trade: ~$8 million.',
      'Assisted clients with rollovers, wires, EFTs, deposits, withdrawals, and margin balances; largest account: >$100 million.',
      'Guided clients through analyst opinions, equity scores, and Fidelity\'s performance tracking tools.',
      'Passed SIE, Series 7, and Series 63 on first attempt; registered in all 50 states, Puerto Rico, USVI, and D.C.',
      'Recognized with Chairman\'s Shares for cultural impact.',
      'Consistently high Customer Experience Index (CEI) scores achieved.'
    ]
  },
  {
    title: 'Shift Lead  ·  Consultation Agent',
    company: 'Geek Squad',
    location: 'Boulder, CO',
    dates: '2023 – 2023',
    bullets: [
      'Achieved 200% of store targets for service revenue per hour; tripled non-services revenue vs next highest earner.',
      'Assisted with operations adjustments, consistently a top performer in productivity and customer engagement.'
    ]
  }
]

export const profile =
  'Registered Representative at Fidelity Investments supporting advisors and ' +
  'clients across complex transactions, with a client-first approach and a ' +
  'background in software development. Active Series 7 and Series 63, currently ' +
  'preparing for CFA Level I. Seeking roles combining domain knowledge with ' +
  'analytical and technical skill such as investment management consulting, ' +
  'advisory, and adjacent paths.'

export const education = {
  school: 'University of Colorado, Boulder',
  degree: 'Bachelor of Arts, Economics',
  location: 'Boulder, CO',
  status: 'In Progress'
}

export const skills = {
  technical: 'R · Python · SQL · Swift · Vue 3 · CSS · HTML · C++',
  professional: 'Budgeting and Forecasting · Strategic Planning & Execution · Leadership'
}

export const credentials = 'Pursuing CFA · SIE · Series 7 · Series 63'

export const downloads = [
  { label: 'Get The One Page PDF', href: '/resume/andrew-zimmerman-resume-onepage.pdf' },
  { label: 'Get The Full PDF',     href: '/resume/andrew-zimmerman-resume-full.pdf' }
]

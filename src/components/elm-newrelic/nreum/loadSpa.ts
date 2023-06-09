import { BrowserAgent } from '@newrelic/browser-agent'
import type { Init } from './types.d'

/**
 * Try to initialize NREUM
 *
 * @param nreumOptions - The NREUM Options
 */
/* eslint-disable import/prefer-default-export */
export const init: Init = (nreumOptions) => {
  const defaults = {
    beacon: 'bam-cell.nr-data.net',
    errorBeacon: 'bam-cell.nr-data.net',
    privacy: {
      cookiesEnabled: true,
    },
    sa: 1,
  }
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const optionApplication = { ...defaults, ...nreumOptions }

  if (!window.NRAGENT) {
    window.NRAGENT = {}
  }

  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  /* eslint-disable @typescript-eslint/no-unsafe-call */
  window.NRAGENT = new BrowserAgent()
  window.NRAGENT.start(optionApplication).then(() => {
    console.log('Browser Agent Initialized!')
  })
}

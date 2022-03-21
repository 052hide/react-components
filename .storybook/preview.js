import { initialize, mswDecorator } from 'msw-storybook-addon'
import { customViewports } from './const'

import '../src/styles/globals.css'

export const parameters = {
  viewport: {
    viewports: customViewports,
    defaultViewport: 'iPhone13Pro',
  },
  actions: { argTypesRegex: '^(on)|(handle)[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    isReady: true,
  },
}

// Initialize MSW
initialize()

export const decorators = [mswDecorator]

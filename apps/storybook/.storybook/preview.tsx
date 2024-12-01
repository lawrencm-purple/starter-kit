import type { Preview } from '@storybook/react'
import React from 'react';

import '../src/styles/globals.css'; 
import '@com/ui/theme'


// add a decorator to apply global styles
export const decorators = [
  (Story) => {
    document.body.classList.add('prose');
    return <Story />;
  },
];
 


const preview:Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },



  },
};

export default preview;
import React from 'react';
import MDX from '@mdx-js/runtime';

// Provide custom components for markdown elements
const components = {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
};

// Provide custom components that will be referenced as JSX
// in the markdown string
const scope = {
  Demo: () => <h1>This is a demo component</h1>,
};

const mdx = `
# Hello, world!

<Demo />
`;

export default () => (
  <MDX components={components} scope={scope}>
    {mdx}
  </MDX>
);

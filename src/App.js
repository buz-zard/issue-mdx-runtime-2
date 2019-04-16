import React from 'react';
import MDX from '@mdx-js/runtime';

const mdx = `
# Hello

<div children="OK" />
`;

export default function App() {
  return (
    <div>
      <MDX>{mdx}</MDX>
    </div>
  );
}

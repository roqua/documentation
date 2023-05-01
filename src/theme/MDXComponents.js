import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Icon from '@site/src/components/Icon';
import Screenshot from '@site/src/components/Screenshot';
import Snapshot from '@site/src/components/Snapshot';

export default {
  // Re-use the default mapping
  ...MDXComponents,

  // Custom components available globally without importing them
  icon: Icon,
  screenshot: Screenshot,
  snapshot: Snapshot
};


// Import the original mapper
import Icon from '@site/src/components/Icon';
import Screenshot from '@site/src/components/Screenshot';
import Snapshot from '@site/src/components/Snapshot';
import MDXComponents from '@theme-original/MDXComponents';

export default {
  // Re-use the default mapping
  ...MDXComponents,

  // Custom components available globally without importing them
  Icon,
  Screenshot,
  Snapshot
};


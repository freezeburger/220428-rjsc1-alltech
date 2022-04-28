import React, { lazy, Suspense } from 'react';

const LazyViewMessages = lazy(() => import('./ViewMessages'));

const ViewMessages = props => (
  <Suspense fallback={null}>
    <LazyViewMessages {...props} />
  </Suspense>
);

export default ViewMessages;

import React, { lazy, Suspense } from 'react';

const LazyFeatureMessages = lazy(() => import('./FeatureMessages'));

const FeatureMessages = props => (
  <Suspense fallback={null}>
    <LazyFeatureMessages {...props} />
  </Suspense>
);

export default FeatureMessages;

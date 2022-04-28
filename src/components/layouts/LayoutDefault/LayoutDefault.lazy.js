import React, { lazy, Suspense } from 'react';

const LazyLayoutDefault = lazy(() => import('./LayoutDefault'));

const LayoutDefault = props => (
  <Suspense fallback={null}>
    <LazyLayoutDefault {...props} />
  </Suspense>
);

export default LayoutDefault;

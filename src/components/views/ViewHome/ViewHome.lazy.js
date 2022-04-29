import React, { lazy, Suspense } from 'react';

const LazyViewHome = lazy(() => import( /* webpackChunkName: "ViewHome" */ './ViewHome'));

const ViewHome = props => (
  <Suspense fallback={null}>
    <LazyViewHome {...props} />
  </Suspense>
);

export default ViewHome;

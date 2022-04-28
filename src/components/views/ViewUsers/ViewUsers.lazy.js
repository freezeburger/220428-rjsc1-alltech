import React, { lazy, Suspense } from 'react';

const LazyViewUsers = lazy(() => import('./ViewUsers'));

const ViewUsers = props => (
  <Suspense fallback={null}>
    <LazyViewUsers {...props} />
  </Suspense>
);

export default ViewUsers;

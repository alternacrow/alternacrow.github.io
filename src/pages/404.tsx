import React, { FC } from 'react';

import Layout from '../views/organisms/layouts/layout';
import SEO from '../views/organisms/layouts/seo';

const NotFoundPage: FC = () => (
  <Layout>
    <SEO title="Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

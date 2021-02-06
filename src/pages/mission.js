import React from 'react';
import { Layout, MissionContent, SEO } from 'components';

export default function MissionPage() {
  return (
    <Layout>
      <SEO
        title="My Mission"
        description="Learn all about why I make earrings"
      />
      <MissionContent />
    </Layout>
  );
}

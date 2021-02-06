import React from 'react';
import { Layout, FaqContent, SEO } from '../components';

export default function FaqPage() {
  return (
    <Layout>
      <SEO
        title="Contact Page"
        description="Find out how to contact and get answers from your burning questions"
      />
      <FaqContent />
    </Layout>
  );
}

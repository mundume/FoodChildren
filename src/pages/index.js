import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Subscribe from 'sections/subscribe';
import Services from 'sections/services';
import VideoIntro from 'sections/video-intro';
import WorldMap from 'sections/world-map';
import Milestone from 'sections/milestone';
import Blog from 'sections/blog';
import Donate from 'sections/Donate'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Live For Children"
          description="Help a child and save a life"
        />
        <Banner />
        <Services />
        <VideoIntro />
        <WorldMap />
        <Milestone />
        <Blog />
        <Subscribe />
        <Donate/>
      </Layout>
    </ThemeProvider>
  );
}

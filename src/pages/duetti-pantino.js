import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import data from '../data';

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Landing = props => (
  <Layout>
    <Helmet>
      <title>
        {data['duetti-pantino'].title} - {props.data.site.siteMetadata.title}
      </title>
      <meta name="description" content={data['duetti-pantino'].title} />
    </Helmet>

    <section id="banner" className={'style1'}>
      <div className="inner">
        <header className="major">
          <h1>{data['duetti-pantino'].title}</h1>
        </header>
        <div className="content">
          {data['duetti-pantino'].slogan.map(sentence => (
            <p>{sentence}</p>
          ))}
        </div>
      </div>
    </section>

    <div id="main">
      <section id="description">
        <div className="inner">
          <header className="major">
            <h2>COMING SOON ...</h2>
          </header>
          <p>
            鋭意製作中 <br />
            乞うご期待を
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Landing;

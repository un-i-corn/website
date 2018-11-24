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
            <p key={sentence}>{sentence}</p>
          ))}
        </div>
      </div>
    </section>

    <div id="main">
      <section id="description">
        <div className="inner">
          <header className="major">
            <h2>予約受付中</h2>
          </header>
          <p>
            予約フォームは
            <a href="https://goo.gl/forms/7rOHpW1myotMnrA53">こちら</a>
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Landing;

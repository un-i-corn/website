import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import data from '../data';

import idiomSpeedPic1 from '../assets/images/Idiom-Speed1.jpg';
import idiomSpeedPic2 from '../assets/images/Idiom-Speed2.jpg';
import idiomSpeedPic3 from '../assets/images/Idiom-Speed3.jpg';

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const IdiomSpeedLanding = props => (
  <Layout>
    <Helmet>
      <title>
        {data['idiom-speed'].title} - {props.data.site.siteMetadata.title}
      </title>
      <meta name="description" content={data['idiom-speed'].title} />
    </Helmet>

    <section id="banner" className={'style2 idiom-speed-bg'}>
      <div className="inner">
        <header className="major">
          <h1>{data['idiom-speed'].title}</h1>
        </header>
        <div className="content">
          {data['idiom-speed'].slogan.map(sentence => (
            <p>{sentence}</p>
          ))}
        </div>
      </div>
    </section>

    <div id="main">
      <section id="description">
        <div className="inner">
          <p>
            『熟語スピード』はトランプのスピード（はやぶさ）を漢字の熟語で繋げて遊ぶゲームです。
            <br />
            台札に繋がる熟語を素早く自分の場札から出していき、自分の山札・場札が先になくなったプレイヤーが勝利します。
          </p>
        </div>
      </section>
      <section id="spotlight1" className="spotlights">
        <section>
          <div className="image">
            <img src={idiomSpeedPic1} alt="国語力を高める" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>国語力を高める</h3>
              </header>
              <p>
                振り仮名が付いているので、読み方がわからなくても大丈夫！
                <br />
                「手水」のような意外な発見も？
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="image">
            <img src={idiomSpeedPic2} alt="国語力を高める" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>漢字の選出にAIを使用</h3>
              </header>
              <p>
                AIのチカラで繋がりやすい漢字を選出
                <br />
                熟語がどんどん繋がるスピード感
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="image">
            <img src={idiomSpeedPic3} alt="ルールは簡単" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>ルールは簡単</h3>
              </header>
              <p>
                28種類の漢字カードを繋げるだけ
                <br />
                1ゲームはたったの5分
                <br />
                小学生から大人まで、誰でも楽しめる
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

export default IdiomSpeedLanding;

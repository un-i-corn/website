import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import data from '../data';
import logoDuettiPantino from '../assets/images/Duetti-Pantino.png';
import picIdiomSpeed from '../assets/images/Idiom-Speed2.jpg';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="UNiCORN BODOGE"
          meta={[
            {
              name: 'description',
              content: 'ボードゲーム制作サークル「UNiCORN」の公式サイト',
            },
            {
              name: 'keywords',
              content: 'board game, ボードゲーム, ゲームマーケット',
            },
          ]}
        />

        <Banner />

        <div id="main">
          <section id="games" className="tiles">
            <article style={{ backgroundImage: `url(${logoDuettiPantino})` }}>
              <header className="major">
                <h3>{data['duetti-pantino'].title}</h3>
                {data['duetti-pantino'].slogan.map(sentence => (
                  <p key={sentence.toBase64}>{sentence}</p>
                ))}
              </header>
              <Link to="/duetti-pantino" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${picIdiomSpeed})` }}>
              <header className="major">
                <h3>{data['idiom-speed'].title}</h3>
                {data['idiom-speed'].slogan.map(sentence => (
                  <p key={sentence.toBase64}>{sentence}</p>
                ))}
              </header>
              <Link to="/idiom-speed" className="link primary" />
            </article>
          </section>
          <section id="news">
            <div className="inner">
              <header className="major">
                <h2>最新情報</h2>
              </header>
              <p>
                11月24日（土）ゲームマーケット初出展！「熟語スピード」、「ドゥエッティ・パンティーノ」の2つのゲームで参加させて頂きます。
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="http://gamemarket.jp/booth/gm2729/"
                    className="button next"
                  >
                    ゲームマーケットの紹介ページへ
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;

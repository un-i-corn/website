import React from 'react';
import Typed from 'react-typed';

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h2>
          <Typed
            strings={[
              'UNiCORN ^500 『アソビ』も踏ん張れ',
              '11月24日（土）ゲームマーケット初出展！',
            ]}
            typeSpeed={25}
            loop={true}
            loopCount={-1}
            backDelay={1000}
            backSpeed={40}
          />
        </h2>
      </header>
      <div className="content">
        <ul className="actions">
          <li>
            <a href="#games" className="button next scrolly">
              ゲームをチェック
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;

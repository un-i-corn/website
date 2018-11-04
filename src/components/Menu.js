import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/idiom-speed">
            熟語スピード
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/duetti-pantino">
            ドゥエッティ・パンティーノ
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="/" className="button special fit">
            Home
          </a>
        </li>
        <li>
          <a href="https://twitter.com/UNiCORN_bodoge" className="button fit">
            Twitter
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;

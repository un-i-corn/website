import React from 'react';

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/UNiCORN_bodoge"
            className="icon alt fa-twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCjZ7uEPuCo7nSXo3To1JT2g/"
            className="icon alt fa-youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Youtube</span>
          </a>
        </li>
        <li>
          <a
            href="mailto://unicorn.bodoge@gmail.com"
            className="icon alt fa-envelope"
          >
            <span className="label">Mail</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; UNiCORN</li>
        <li>
          Built by{' '}
          <a
            href="https://202accepted.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            202 Accepted
          </a>{' '}
          based on{' '}
          <a
            href="https://github.com/codebushi/gatsby-starter-forty"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            HTML5UP's Gatsby Starter Forty
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;

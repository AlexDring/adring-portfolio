import * as React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import PropTypes from 'prop-types';

export default function NavLink({ anchor, text, setOpen, open, title }) {
  return (
    <li>
      <AnchorLink to={`/#${anchor}`} title={title}>
        <div role="presentation" onClick={() => setOpen(!open)}>
          {text}
        </div>
      </AnchorLink>
    </li>
  );
}

NavLink.propTypes = {
  anchor: PropTypes.string,
  text: PropTypes.string,
  setOpen: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
};

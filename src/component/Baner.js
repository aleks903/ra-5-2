/* Search
 */

import React from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';

export default function Search(props) {
  const { img, href } = props;
  return (
    <React.Fragment>
      <a href={href}>
        <img src={img} alt='Baner' />
      </a>
    </React.Fragment>
  );
}

Search.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
};

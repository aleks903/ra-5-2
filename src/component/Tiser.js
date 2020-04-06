import React from 'react';
import PropTypes from 'prop-types';

export default function Tiser(props) {
  const {
    img,
    href,
    title,
    text,
  } = props;

  return (
    <React.Fragment>
      <a href={href}>
        <img src={img} />
        <h2>{title}</h2>
      </a>
      <span>{text}</span>
    </React.Fragment>
  );
}

Tiser.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

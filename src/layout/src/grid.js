// REACT
import React from 'react';
// VENDOR
import PropTypes from 'prop-types';
// COMPONENTS
import { createProps, getClass } from './row';

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

export default function Grid(props) {
  const containerClass = getClass(props.fluid ? 'container-fluid' : 'container');
  const classNames = [props.className, containerClass];

  return React.createElement(props.tagName || 'div', createProps(propTypes, props, classNames));
}

Grid.propTypes = propTypes;

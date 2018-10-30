// REACT
import React from 'react';
// VENDOR
import styles from 'flexboxgrid2/flexboxgrid2.css';
import PropTypes from 'prop-types';

const rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

export const ViewportSizeType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);
export const ColumnSizeType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

const propTypes = {
  reverse: PropTypes.bool,
  start: ViewportSizeType,
  center: ViewportSizeType,
  end: ViewportSizeType,
  top: ViewportSizeType,
  middle: ViewportSizeType,
  bottom: ViewportSizeType,
  around: ViewportSizeType,
  between: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

export function getClass(className) {
  return (styles && styles[className]) ? styles[className] : className;
}

export function createProps(propTypes, props, classNames) {
  const newProps = {};

  Object.keys(props)
    .filter(key => (key === 'children' || !propTypes[key]))
    .forEach(key => (newProps[key] = props[key]));

  const className = classNames.filter(cn => cn).join(' ');
  return Object.assign({}, newProps, { className });
}

function getRowClassNames(props) {
  const modificators = [props.className, getClass('row')];

  for (let i = 0; i < rowKeys.length; ++i) {
    const key = rowKeys[i];
    const value = props[key];
    if (value) {
      modificators.push(getClass(`${key}-${value}`));
    }
  }

  if (props.reverse) {
    modificators.push(getClass('reverse'));
  }

  return modificators;
}

export function getRowProps(props) {
  return createProps(propTypes, props, getRowClassNames(props));
}

export default function Row(props) {
  return React.createElement(props.tagName || 'div', getRowProps(props));
}

Row.propTypes = propTypes;

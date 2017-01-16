import React, { PropTypes } from 'react';
import WithLoader from '../hocs/withLoader';

const CustomButton = (props) => {
  const { children, iconClass } = props;

  return (
    <button {...props} >
      { children }
      {iconClass && <i className={iconClass} />}
    </button>
  );
};

const { node, string } = PropTypes;

CustomButton.propTypes = {
  children: node,
  iconClass: string,
};

export default CustomButton;

import React, { PropTypes, Component } from 'react';

const { bool } = PropTypes;

const WithLoader = WrappedButton => class extends Component {

  static defaultProps = {
    isLoading: false,
  };

  static propTypes = {
    isLoading: bool,
  };

  render() {
    if (this.props.isLoading) {
      return <button disabled="disabled"><i className="loading" /></button>;
    }

    return <WrappedButton {...this.props} />;
  }
};

export default WithLoader;

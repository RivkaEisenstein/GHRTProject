import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert'

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <Alert key="danger" variant="danger">
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </Alert>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>

        </div>
      );
    }
    ErrorBoundary.propTypes = {
      children: PropTypes.object
    };
    return this.props.children;

  }

}

function errorBoundary(Component) {
  return function func(props) {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
export default errorBoundary;

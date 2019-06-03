import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const BasePage = (props) => {
  const { children, className } = props;

  return (
    <div className={`base-page ${className}`}>
      <Container>
        { children }
      </Container>
    </div>
  )
}

BasePage.defaultProps = {
  className: ''
}

BasePage.propTypes = {
  className: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired
}

export default BasePage;
import * as React from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';
import Column from '../components/Column';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const AboutPage = () => {
  return (
    <Container>
      <Column className="col-12">
        <h1>About Us</h1>
        <p>
          Rangle.io is a next-generation HTML5 design and development firm
          dedicated to modern, responsive web and mobile applications.
        </p>
      </Column>
    </Container>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);

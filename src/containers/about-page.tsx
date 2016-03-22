import * as React from 'react';
import { connect } from 'react-redux';
import Container from '../components/container';

interface IAboutPageProps extends React.Props<any> {};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

class AboutPage extends React.Component<IAboutPageProps, void> {
  render() {
    return (
      <Container size={4} center>
        <h2 className="caps">About Us</h2>
        <p>
          Rangle.io is a next-generation HTML5 design and development firm
          dedicated to modern, responsive web and mobile applications.
        </p>
      </Container>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);

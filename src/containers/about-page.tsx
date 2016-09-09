import * as React from 'react';
import Container from '../components/container';

interface IAboutPageProps extends React.Props<any> {};

export default function AboutPage(props: IAboutPageProps) {
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

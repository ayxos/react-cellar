import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from '../components/container';
import { wines } from '../api/wine';

export interface ICreatePageProps {}

export interface ICreatePageState {
  username?: string;
  wines?: any;
  lastGistUrl?: string;
}

export default class ListPage extends React.Component<ICreatePageProps, ICreatePageState> {
  serverRequest= null;

  componentWillMount() {};

  componentDidMount() {
    console.log('hola');
    wines().then((result) => {
      console.log(wines);
      this.setState({wines: result});
    });
  };

  componentWillUnmount() {
    console.log('adios');
  };

  render() {
    let result = (this.state && this.state.wines) ? this.state.wines : null;
    return (
      <div>
        <Container size={4} center>
          <h2 className="caps">Create</h2>
          <a href={'hola'}>{result}</a>
        </Container>
      </div>
    );
  };
};

// export default function CreatePage() {
//   return ReactDOM.render(<ListPage/>);
// };

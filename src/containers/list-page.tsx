import * as React from 'react';
import Container from '../components/container';
import { wines } from '../api/wine';

export interface ICreatePageProps {}

export interface ICreatePageState {
  username?: string;
  wines?: any;
  lastGistUrl?: string;
}

export default class ListPage extends React.Component<ICreatePageProps, ICreatePageState> {

  componentWillMount() {};

  componentDidMount() {
    console.log('hola');
    wines().then((winePromise) => {
      console.log('esta mierda?', winePromise);
      this.setState({wines: winePromise});
    });
  };

  componentWillUnmount() {
    console.log('adios');
  };

  renderItems() {
    console.log('reloading');
    let wines = (this.state && this.state.wines) ? this.state.wines : null;
    if (!wines) {
      return <a href={'hola'}>{'nada'}</a>;
    }
    let lines = wines.map((wine) => {
      return <p key={wine._id}>{wine.title}{' '}{wine.year}</p>;
    });
    return lines;
  }

  render() {
    let result = (this.state && this.state.wines) ? this.state.wines : null;
    console.log('rerender', result);
    return (
      <div>
        <Container size={4} center>
          <h2 className="caps">Create</h2>
          {this.renderItems()}
        </Container>
      </div>
    );
  };
};

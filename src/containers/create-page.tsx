import * as React from 'react';
import Container from '../components/container';
import { newWine } from '../api/wine';
import WineForm from '../components/wine/wine-form';

export interface ICreatePageProps extends React.Props<any> {}

export interface ICreatePageState {
  isLoading?: boolean;
  showModal?: boolean;
}

class CreatePage extends React.Component<ICreatePageProps, ICreatePageState> {
  createNewWine() {
    newWine({
      title: 'test',
      region: 'test',
      year: 1,
      tags: [ 1, 2, 3, 4]
    });
  };

  componentWillMount() {
    this.setState({
      isLoading: false,
      showModal: false
    });
  };

  onSubmit(values) {
    console.log('onsubmit', values);
  }

  render() {
    return (
      <div>
        <Container size={4} center>
          <h2 className="caps">Create</h2>
          <WineForm
            onSubmit={ this.onSubmit }
          />
        </Container>
      </div>
    );
  }
}

export default CreatePage;

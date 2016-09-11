import * as React from 'react';
import Container from '../components/container';
import { newWine } from '../api/wine';
import WineForm from '../components/wine/wine-form';

export interface ICreatePageProps extends React.Props<any> {}

export interface ICreatePageState {
  isLoading?: boolean;
  showModal?: boolean;
  files?: any;
}

class CreatePage extends React.Component<ICreatePageProps, ICreatePageState> {

  componentWillMount() {
    this.setState({
      isLoading: false,
      showModal: false,
      files: []
    });
  };

  onSubmit(values) {
    values.image = this.state.files;
    console.log('onsubmit', values);
    newWine(values);
  }

  onChange(values) {
    this.setState({files: values});
  }

  render() {
    return (
      <div>
        <Container size={4} center>
          <h2 className="caps">Create</h2>
          <WineForm
            files={this.state.files}
            onChange={ this.onChange.bind(this) }
            onSubmit={ this.onSubmit.bind(this) }
          />
        </Container>
      </div>
    );
  }
}

export default CreatePage;

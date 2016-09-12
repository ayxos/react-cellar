import * as React from 'react';
import Container from '../components/container';
import { getWine, setWine } from '../api/wine';
import WineForm from '../components/wine/wine-form';

export interface ICreatePageProps extends React.Props<any> {
  params?: any;
}

export interface ICreatePageState {
  isLoading?: boolean;
  showModal?: boolean;
  files?: any;
  wine?: any;
}

class CreatePage extends React.Component<ICreatePageProps, ICreatePageState> {

  findWineById(id) {
    console.log('wine!', id);
    getWine(id).then((wine) => {
      console.log('ein', wine)
      return wine;
    });
  };

  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      wine: this.findWineById(this.props.params.wineId)
    })
  };

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
    setWine(values);
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

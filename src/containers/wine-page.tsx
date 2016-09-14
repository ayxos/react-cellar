import * as React from 'react';
import Container from '../components/container';
import { getWine, setWine } from '../api/wine';
import WineForm from '../components/wine/wine-form';

const connect = require('react-redux').connect;

let WineFormExtended;

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
    return getWine(id);
  };

  isEdit() {
    console.log('param', this.props.params)
    if (!Object.keys(this.props.params).length) {
      console.log('no existe');
      WineFormExtended = null;
      return;
    }
    this.findWineById(this.props.params.wineId).then((wine) => {
      WineFormExtended = connect(
        state => ({
          initialValues: wine
        })              // bind account loading action creator
      )(WineForm);

      this.setState({
        wine: wine
      });
    });
  }

  componentWillMount() {
    this.setState({
      isLoading: false,
      showModal: false,
      files: [],
      wine: null
    });
  };

  onSubmit(values) {
    values.image = this.state.files;
    console.log('onsubmit', values);
    setWine(values);
  }

  onChange(values) {
    console.log('loaded!EEH', values);
    this.setState({files: values});
  }

  render() {
    this.isEdit();
    return (
      <div>
        <Container size={4} center>
          <h2 className="caps">{this.props.params ? 'Edit' : 'Create' }</h2>
          {
            WineFormExtended ? <WineFormExtended
            edit={true}
            files={this.state.files}
            onChange={ this.onChange.bind(this) }
            onSubmit={ this.onSubmit.bind(this) }
          /> : <WineForm
            files={this.state.files}
            onChange={ this.onChange.bind(this) }
            onSubmit={ this.onSubmit.bind(this) }
          />
          }
        </Container>
      </div>
    );
  }
}

export default CreatePage;


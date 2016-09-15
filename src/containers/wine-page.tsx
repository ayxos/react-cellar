import * as React from 'react';
import Container from '../components/container';
import { getWine, setWine, editWine,
  setWineImage, deleteWine } from '../api/wine';
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

  componentDidMount() {
    if (!Object.keys(this.props.params).length) {
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
    if (WineFormExtended) {
      editWine(this.state.wine._id, values);
      if (this.state.files) {
        setWineImage(this.state.wine._id, this.state.files);
      }
    } else {
      setWine(values).then((result: any) => {
        if (this.state.files) {
          setWineImage(result.Object._id, this.state.files);
        }
      });
    }
  }

  onDelete() {
    deleteWine(this.state.wine._id);
  }

  onChange(values) {
    this.setState({files: values});
  }

  render() {
    return (
      <div>
        <Container size={4} center>
          <h2 className="caps">{this.props.params ? 'Edit' : 'Create' }</h2>
          {
            WineFormExtended ? <WineFormExtended
            edit={
              this.state.wine && this.state.wine.picture
              ? this.state.wine.picture : null
            }
            files={this.state.files}
            onDelete={ this.onDelete.bind(this) }
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


import * as React from 'react';
import Container from '../components/container';
import { newWine } from '../api/wine';
import WineForm from '../components/wine/wine-form';

export interface ICreatePageProps extends React.Props<any> {}

export interface ICreatePageState {
  isLoading?: boolean;
  showModal?: boolean;
}

const styles = {
  style1: {
    width: '80%',
    height: '550px',
    fontFamily: 'Andika',
    fontSize: '36',
    color: 'white',
    backgroundImage: 'url(\'assets/bg.jpg\')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '-19px',
    padding: '180px',
    textSlign: 'center',
    textShadow: '1px 1px 1px #000'
  }
};

class InitPage extends React.Component<ICreatePageProps, ICreatePageState> {
  componentWillMount() {
    this.setState({
      isLoading: false,
      showModal: false
    });
  };

  onSubmit(values) {
    console.log('onsubmit', values);
    newWine(values);
  }

  render() {
    return (
      <div>
        <Container size={0} style={styles.style1} center>
        </Container>
      </div>
    );
  }
}

export default InitPage;

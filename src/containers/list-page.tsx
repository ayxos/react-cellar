import * as React from 'react';
import Container from '../components/container';
import { wines } from '../api/wine';
import { Modal, Button, Popover, Tooltip,
  OverlayTrigger } from 'react-bootstrap';
export interface ICreatePageProps {}

export interface ICreatePageState {
  username?: string;
  wines?: any;
  lastGistUrl?: string;
  isLoading?: boolean;
  showModal?: boolean;
}

const styles = {
  style1: {
    width: '260px',
    textAlign: 'center'
  },
  style2: {
    height: '150px'
  },
  style3: {
    float: 'left'
  },
  style4: {
    border: 'none',
    display: 'inline-block'
  },
  style5: {
    width: '1024px'
  }
};

class ListPage extends React.Component<ICreatePageProps, ICreatePageState> {

  componentWillMount() {
    this.setState({
      isLoading: false,
      showModal: false
    });
  };

  componentDidMount() {
    wines().then((winePromise) => {
      this.setState({wines: winePromise});
    });
  };

  close() {
    this.setState({isLoading: false, showModal: false });
  };

  componentWillUnmount() {};

  renderItems() {
    let wines = (this.state && this.state.wines) ? this.state.wines : null;
    if (!wines) {
      return <a href={'hola'}>{'nada'}</a>;
    }
    let lines = wines.map((wine) => {
      return <li key={wine._id}
                 className="list-group-item"
                 style={styles.style4}
      >
        <a
          href="/wines/{wine._id}"
          style={ styles.style1 }
          className="thumbnail plain ng-binding"
        >
        <div style={ styles.style2 } >
          <img src="" height="150" width="125" alt=""/>
        </div>
        <h5 className="ng-binding"/>
        {wine.year}
        <br></br>
        <i className="icon-globe"/>{wine.title}</a>
      </li>;
    });
    return lines;
  }

  renderModal() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}>
                <a href="#">popover</a>
              </OverlayTrigger> here
            </p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}>
                <a href="#">tooltip</a>
              </OverlayTrigger> here
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>);
  }

  handleClick() {
    this.setState({isLoading: true, showModal: true});
  }

  render() {
    return (
      <div>
        <Container size={0} center={true} style={styles.style5}>
          <ul className="thumbnails list-group" style={styles.style3 }>
            {this.renderItems()}
          </ul>
          {this.renderModal()}
        </Container>
      </div>
    );
  };
};

export default ListPage;

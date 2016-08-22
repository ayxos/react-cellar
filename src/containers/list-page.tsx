import * as React from 'react';
import Container from '../components/container';
import { wines } from '../api/wine';
import { Modal, Button, Popover, Tooltip,
  OverlayTrigger } from 'react-bootstrap';
import { FieldGroup } from '../components/field-group';
export interface ICreatePageProps {}

export interface ICreatePageState {
  username?: string;
  wines?: any;
  lastGistUrl?: string;
  isLoading?: boolean;
  showModal?: boolean;
}

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
      return <p key={wine._id}>{wine.title}{' '}{wine.year}</p>;
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

            <hr />

            <form>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Text"
                placeholder="Enter text"
              />
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
              />
              <FieldGroup
                id="formControlsPassword"
                label="Password"
                type="password"
              />
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="File"
              />
            </form>
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
    let isLoading = this.state.isLoading;
    return (
      <div>
        <Container size={4} center>
          <h2 className="caps">Create</h2>
          {this.renderItems()}
          {this.renderModal()}
          <Button
            bsStyle="primary"
            disabled={isLoading}
            onClick={!isLoading ? this.handleClick.bind(this) : null}>
            {isLoading ? 'Loading...' : 'Loading state'}
          </Button>
        </Container>
      </div>
    );
  };
};

export default ListPage;

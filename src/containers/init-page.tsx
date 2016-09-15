import * as React from 'react';
import Container from '../components/container';
import { setWine } from '../api/wine';
import { Link } from 'react-router';

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
    fontSize: '36px',
    color: 'white',
    backgroundImage: 'url(\'assets/bg.jpg\')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '-19px',
    padding: '180px',
    textSlign: 'center',
    textShadow: '1px 1px 1px #000'
  },
  style2: {
    marginRight: '6px'
  },
  style3: {
    opacity: '.9',
    textAlign: 'center'
  },
  style4: {
    position: 'static',
    visibility: 'visible',
    width: '61px',
    height: '20px'
  },
  style5: {
    display: 'inline-block',
    margin: '1%'
  },
  style6: {
    textAlign: 'center'
  },
  style7: {
    fontStyle: 'none',
    background: 'white',
    padding: '9px 14px',
    fontSize: '16px',
    lineHeight: 'normal',
    borderRadius: '5px',
    color: 'black',
    fontWeight: '200',
    textShadow: 'rgba(0, 0, 0, 0.39) 1px 1px 1px',
    margin: '5px'
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
    setWine(values);
  }

  render() {
    return (
      <div>
        <Container size={0} style={styles.style1} center>
          <div className="home-hero">
            <h1>Welcome to React Cellar</h1>
            <h3>
              A sample app built with React, Bootstrap, Node.js, and MongoDB
            </h3>
            <br></br>
              <div style={styles.style3}>
                <Link
                  className="btn btn-large"
                  to="/list"
                  style={styles.style7} >
                  <img
                    src="http://nodecellar.coenraets.org/img/wine.png"
                    className="pull-left"
                    style={ styles.style2 }/>
                  Start Browsing<br/>Node Cellar
                </Link>
                <a className="btn btn-large"
                   href="https://github.com/ayxos/react-cellar"
                   style={styles.style7}>
                  <img
                    src="http://nodecellar.coenraets.org/img/github.png"
                    className="pull-left"
                    style={styles.style2}/>
                  View Project
                  <br/>on GitHub
                </a>
              </div>
            </div>
        </Container>
        <div className="container">
          <ul className="bs-docs-social-buttons" style={styles.style6}>
            <li style={styles.style5}>
              <a
                className="github-button"
                href="https://github.com/ayxos"
                data-style="mega"
                data-count-href="/ayxos/followers"
                data-count-api="/users/ayxos#followers"
                data-count-aria-label="# followers on GitHub"
                aria-label="Follow @ayxos on GitHub">
                Follow @ayxos
              </a>
            </li>
            <li style={styles.style5}>
              <a
                className="github-button"
                href="https://github.com/ayxos/react-cellar/fork"
                data-icon="octicon-repo-forked"
                data-style="mega"
                data-count-href="/ayxos/react-cellar/network"
                data-count-api="/repos/ayxos/react-cellar#forks_count"
                data-count-aria-label="# forks on GitHub"
                aria-label="Fork ayxos/react-cellar on GitHub">
                Fork
              </a>
            </li>
            <li className="follow-btn" style={styles.style5}>
              <a
                href="https://twitter.com/ayxos"
                className="twitter-follow-button"
                data-size="large"
                data-show-count="false"/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default InitPage;

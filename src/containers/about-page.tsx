import * as React from 'react';
import Container from '../components/container';

interface IAboutPageProps extends React.Props<any> {};

const styles = {
  float: 'left',
  margin: '0% 2%'
};

export default function AboutPage(props: IAboutPageProps) {
return (
    <Container size={4} center>

      <div className="row-fluid">
        <div className="span12">
          <img className="about-icon"
               src="http://nodecellar.coenraets.org/img/download.png"
               width="50" style={styles}/>
          <h4>Download the source code</h4>
          <p>The source code for this application is available in
            <a href="https://github.com/ccoenraets/nodecellar">
              &nbsp;this repository
            </a>
            &nbsp;on GitHub.
          </p>
        </div>
      </div>
      <br></br>

      <div className="row-fluid">
        <div className="span12">
          <img className="about-icon"
               src="http://nodecellar.coenraets.org/img/discuss.png"
               width="50" style={styles}/>
          <h4>Comments and questions</h4>
          <p>
            I love to hear your feedback. Post your questions and
            comments on the repo associated with this application.
          </p>
        </div>
      </div>
      <br></br>

      <div className="row-fluid">
        <div className="span12">
          <img className="about-icon"
               src="http://nodecellar.coenraets.org/img/github.png"
               width="50" style={styles}/>
          <h4>Follow me on GitHub</h4>
          <p>
            <a href="https://github.com/ayxos">@ayxos</a>
          </p>
        </div>
      </div>
      <br></br>

      <div className="row-fluid">
        <div className="span12">
          <img className="about-icon"
               src="http://nodecellar.coenraets.org/img/twitter.png"
               width="50" style={styles}/>
          <h4>Follow me on Twitter</h4>
          <p>
            <a href="http://twitter.com/ayxos">@ayxos</a>
          </p>
        </div>
      </div>
      <br></br>

      <div className="row-fluid">
        <div className="span12">
          <img className="about-icon"
               src="http://nodecellar.coenraets.org/img/blog.png"
               width="50" style={styles}/>
          <h4>Check out my blog</h4>
          <p>
            <a href="http://ayxos.com">ayxos.com</a>
          </p>
        </div>
      </div>
    </Container>
  );
}

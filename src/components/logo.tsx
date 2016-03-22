import * as React from 'react';
const LogoImage = require('../assets/rangleio-logo.svg');

interface ILogoProps {
  style?: Object;
};

const Logo = () => (
  <div className="flex items-center">
    <img style={ styles }
      src={ LogoImage }
      alt="Rangle.io" />
  </div>
);

const styles = { width: 128 };

export default Logo;

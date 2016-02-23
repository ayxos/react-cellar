import * as React from 'react';
const objectAssign = require('object-assign');
const LogoImage = require('../assets/rangleio-logo.svg');

interface ILogoProps {
  style?: Object;
};

const Logo = ({ style = {} }: ILogoProps) => (
  <img
    style={ objectAssign({}, styles.base, style) }
    src={ LogoImage }
    alt="Rangle.io" />
);

const styles = {
  base: {
    width: 128,
  },
};

export default Logo;

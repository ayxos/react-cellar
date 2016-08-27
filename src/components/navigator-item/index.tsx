import * as React from 'react';
import * as classNames from 'classnames';
import { LinkContainer } from 'react-router-bootstrap';

interface INavigatorItemProps extends React.Props<any> {
  isVisible?: boolean;
  mr?: boolean;
  ml?: boolean;
  linkTo?: string;
};

export default function NavigatorItem({
  children = null,
  isVisible = true,
  mr = false,
  ml = false,
  linkTo = '/'
}: INavigatorItemProps) {
  const navItemClasses = classNames('truncate', {
    hide: !isVisible,
    mr2: mr,
    ml2: ml,
  });

  return (
    <LinkContainer className={ navItemClasses } to={ linkTo }>
      { children }
    </LinkContainer>
  );
};

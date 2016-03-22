import * as React from 'react';

interface IContentProps extends React.Props<any> {
  isVisible: boolean;
  style?: Object;
};

function Content({ children = null, isVisible }) {
  return <main>
    { isVisible ? children : null }
  </main>;
}

export default Content;

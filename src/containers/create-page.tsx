import * as React from 'react';
import Container from '../components/container';
import { wine } from '../api/wine';

interface ICreatePageProps extends React.Props<any> {};

export default function CreatePage(props: ICreatePageProps) {
  let newWine = () => {
    wine({
      title: 'test',
      region: 'test',
      year: 1,
      tags: [ 1, 2, 3, 4]
    });
  };
  return (
      <Container size={4} center>
        <h2 className="caps">Create</h2>
        <button
          onClick={newWine}
        />
      </Container>
  );
}

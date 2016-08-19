import * as React from 'react';
import Container from '../components/container';
import { newWine } from '../api/wine';

export interface ICreatePageProps extends React.Props<any> {}

export interface ICreatePageState {}

export default function CreatePage(props: ICreatePageProps) {
  let createNewWine = () => {
    newWine({
      title: 'test',
      region: 'test',
      year: 1,
      tags: [ 1, 2, 3, 4]
    });
  };
  return (
    <div>
      <Container size={4} center>
        <h2 className="caps">Create</h2>
        <button
          onClick={createNewWine}
        />
      </Container>
    </div>
  );
}

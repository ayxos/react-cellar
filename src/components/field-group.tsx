import * as React from 'react';
import { FormGroup, FormControl} from 'react-bootstrap';

export interface HilukMenuProps extends React.Props<any> {
  id?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  help?: string;
}

export class FieldGroup extends React.Component<HilukMenuProps, {}> {

  componentDidMount() {}

  render() {
    let { id, label } = this.props;
    return <FormGroup controlId={id}>
      <label>{label}</label>
      <FormControl {...this.props} />
    </FormGroup>;
  }
}

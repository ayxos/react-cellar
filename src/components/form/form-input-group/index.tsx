import * as React from 'react';

import FormGroup from '../form-group';
import FormLabel from '../form-label';
import Input from '../form-input';
import Textarea from '../form-textarea';

interface IInputProps extends React.Props<any> {
  title: string;
  name: string;
  type?: string;
  placeholder?: string;
  fieldDefinition: any;
};

interface ICreatePageState {}

class FormInputGroup extends React.Component<IInputProps, ICreatePageState> {
  render() {
    const {
      title,
      name,
      type,
      placeholder,
      fieldDefinition
    } = this.props;
    const labelId = 'qa-' + name + '-label';
    const inputId = 'qa-' + name + '-input';

    if (type === 'textarea') {
      return (
        <FormGroup testid={name}>
          <FormLabel id={labelId}>{title}</FormLabel>
          <Textarea
            fieldDefinition={ fieldDefinition }
            id={inputId}
            placeholder={placeholder}/>
        </FormGroup>
      );
    }

    return (
      <FormGroup testid={name}>
        <FormLabel id={labelId}>{title}</FormLabel>
        <Input
          type={type} fieldDefinition={ fieldDefinition }
          id={inputId}
          placeholder={placeholder}/>
      </FormGroup>
    );
  }
}

export default FormInputGroup;

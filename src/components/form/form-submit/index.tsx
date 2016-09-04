import * as React from 'react';

import FormGroup from '../form-group';
import Button from '../../button';

interface IInputProps extends React.Props<any> {
  title?: string;
  resetForm?: () => void;
};

interface ICreatePageState {}

class FormSubmit extends React.Component<IInputProps, ICreatePageState> {
  render() {
    const {
      title,
      resetForm
    } = this.props;
    const testId = title + '-submit';
    const buttonId = 'qa-' + title + '-button';

    if (resetForm) {
      return (
        <FormGroup testid={ testId }>
          <Button type="submit" className="mr1" id={ buttonId }>
            Create
          </Button>
          <Button onClick={ resetForm }
                  type="reset"
                  className="bg-red" id="qa-clear-button">
            Clear
          </Button>
        </FormGroup>
      );
    } else {
      return (
        <FormGroup testid={ testId }>
          <Button type="submit" className="mr1" id={ buttonId }>
            Create
          </Button>
        </FormGroup>
      );
    }
  }
}

export default FormSubmit;

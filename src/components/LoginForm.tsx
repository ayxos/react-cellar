import * as React from 'react';
import * as ReduxForm from 'redux-form';
import Form from './Form';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormError from './FormError';
import Input from './Input';
import Button from './Button';
import Alert from './Alert';

interface ILoginFormProps {
  onSubmit: () => void;
  handleSubmit?: () => void;
  resetForm?: () => void;
  isPending: boolean;
  hasError: boolean;
  fields?: {
    username: ReduxForm.FieldProp;
    password: ReduxForm.FieldProp;
  };
};

const validate = values => {
  const errors = { username: '', password: '' };

  if (!values.username) {
    errors.username = 'Username is required.';
  }

  if (!values.password) {
    errors.password = 'Password is required.';
  }

  return errors;
};

// Making this a class-based component until redux-form typings support 
// stateless functional components.
class LoginForm extends React.Component<ILoginFormProps, void> {
  render() {
    const {
      handleSubmit,
      resetForm,
      isPending,
      hasError,
      fields: {
        username,
        password
      }
    } = this.props;

    return (
      <Form handleSubmit={ handleSubmit }>
        <Alert isVisible={ isPending }>Loading...</Alert>
        <Alert isVisible={ hasError } status="error">
          Invalid username and password
        </Alert>

        <FormGroup>
          <FormLabel>Username</FormLabel>
          <Input type="text" fieldDefinition={ username } />
          <FormError isVisible={ !!(username.touched && username.error) }>
            { username.error }
          </FormError>
        </FormGroup>

        <FormGroup>
          <FormLabel>Password</FormLabel>
          <Input type="password" fieldDefinition={ password } />
          <FormError isVisible={ !!(password.touched && password.error) }>
            { password.error }
          </FormError>
        </FormGroup>

        <FormGroup>
          <Button type="submit">
            Login
          </Button>
          <Button onClick={ resetForm } type="button" className="ml2 bg-red">
            Clear
          </Button>
        </FormGroup>
      </Form>
    );
  }

  static validate(values) {
    const errors = { username: '', password: '' };

    if (!values.username) {
      errors.username = 'Username is required.';
    }

    if (!values.password) {
      errors.password = 'Password is required.';
    }

    return errors;
  }
}

export default ReduxForm.reduxForm({
  form: 'login',
  fields: [
    'username',
    'password',
  ],
  validate: LoginForm.validate,
})(LoginForm);

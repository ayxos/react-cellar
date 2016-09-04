import * as React from 'react';
const ReduxForm = require('redux-form');

import Form from '../form/';
import FormInputGroup from '../form/form-input-group';
import FormSubmit from '../form/form-submit';

interface ILoginFormProps {
  handleSubmit?: () => void;
  resetForm?: () => void;
  fields?: {
    name: any;
    grapes: any;
    country: any;
    region: any;
    year: any;
    notes: any;
    image: any;
  };
};

// Making this a class-based component until redux-form typings support
// stateless functional components.
class LoginForm extends React.Component<ILoginFormProps, void> {
  render() {
    const {
      handleSubmit,
      fields: {
        name,
        grapes,
        country,
        region,
        year,
        notes,
        image
      }
    } = this.props;

    return (
      <Form handleSubmit={ handleSubmit }>

        <FormInputGroup
          title="Name"
          name="name"
          type="text"
          placeholder="Name"
          fieldDefinition={ name }
        />

        <FormInputGroup
          title="Grapes"
          name="grapes"
          type="text"
          placeholder="Grapes"
          fieldDefinition={ grapes }
        />

        <FormInputGroup
          title="Country"
          name="country"
          type="text"
          placeholder="Country"
          fieldDefinition={ country }
        />

        <FormInputGroup
          title="Region"
          name="region"
          type="text"
          placeholder="Region"
          fieldDefinition={ region }
        />

        <FormInputGroup
          title="Year"
          name="year"
          type="number"
          placeholder="year"
          fieldDefinition={ year }
        />

        <FormInputGroup
          title="Notes"
          name="notes"
          type="textarea"
          placeholder="notes"
          fieldDefinition={ notes }
        />

        <FormInputGroup
          title="Image"
          name="image"
          type="file"
          placeholder="image"
          fieldDefinition={ image }
        />

        <FormSubmit
          title="create"
        />
      </Form>
    );
  }
}


export default ReduxForm.reduxForm({
  form: 'wine',
  fields: [
    'name',
    'grapes',
    'country',
    'region',
    'year',
    'notes',
    'image'
  ]
})(LoginForm);

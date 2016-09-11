import * as React from 'react';
const ReduxForm = require('redux-form');
// import * as  Dropzone from 'react-dropzone';
const Dropzone = require('react-dropzone');

import Form from '../form/';
import FormInputGroup from '../form/form-input-group';
import FormSubmit from '../form/form-submit';

interface ILoginFormProps {
  handleSubmit?: () => void;
  onChange?: any;
  resetForm?: () => void;
  files?: any;
  fields?: {
    name: any;
    grapes: any;
    country: any;
    region: any;
    year: any;
    notes: any;
  };
};

interface ILoginFormStatus {
  files: any;
};

const styles = {
  style1: {
    float: 'left'
  },
  style2: {
    float: 'right'
  }
};

// Making this a class-based component until redux-form typings support
// stateless functional components.
class WineForm extends React.Component<ILoginFormProps, ILoginFormStatus> {

  onDrop(files) {
    this.props.onChange(files);
  }

  render() {
    const {
      handleSubmit,
      fields: {
        name,
        grapes,
        country,
        region,
        year,
        notes
      }
    } = this.props;

    return (
      <Form handleSubmit={ handleSubmit }>

        <div className="col-12">

          <div className="col-5" style={styles.style1}>

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

          </div>

          <div className="col-5" style={styles.style2}>
            <div>
              <Dropzone onDrop={this.onDrop.bind(this)}>
                {this.props.files.length > 0 ?
                  <div>
                    <div>
                      {this.props.files.map(
                        (file) =>
                          <img key={file.preview} src={file.preview}/>
                      )}
                    </div>
                  </div>
                  :
                  <p>
                  Try dropping files here, or click to select files to upload.
                  </p>
                }
              </Dropzone>

            </div>
          </div>

          <div className="col-12" style={styles.style1}>
            <FormInputGroup
              title="Notes"
              name="notes"
              type="textarea"
              placeholder="notes"
              fieldDefinition={ notes }
            />

            <FormSubmit
              title="create"
            />
          </div>

        </div>

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
    'notes'
  ]
})(WineForm);

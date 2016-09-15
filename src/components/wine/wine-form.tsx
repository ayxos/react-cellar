const ReduxForm = require('redux-form');

import * as React from 'react';
import * as  Dropzone from 'react-dropzone';
import Form from '../form/';
import FormInputGroup from '../form/form-input-group';
import FormSubmit from '../form/form-submit';

interface ILoginFormProps {
  handleSubmit?: () => void;
  onChange?: any;
  onDelete?: any;
  resetForm?: () => void;
  edit?: any;
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
  files?: any;
};

const styles = {
  style1: {
    float: 'left'
  },
  style2: {
    float: 'right'
  },
  style3: {
    padding: '10px',
    width: '200px',
    border: '2px dashed rgb(102, 102, 102)',
    borderRadius: '5px'
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
              <Dropzone onDrop={this.onDrop.bind(this)} style={styles.style3}>

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
                  <div>
                    <img
                      id="picture"
                      width="180"
                      src= {
                        this.props.edit ? '/covers/' + this.props.edit
                        : '/covers/generic.jpg'
                      }
                    />
                    <p>
                      To change the picture, drag a new
                      picture from your file system onto the box above.
                    </p>
                  </div>
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
              title={ this.props.edit ? 'edit' : 'create' }
            />

            { this.props.edit ?
              <a onClick={this.props.onDelete}> Delete </a>
              : null
            }
          </div>
        </div>
      </Form>
    );
  }
}

export default  ReduxForm.reduxForm({
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

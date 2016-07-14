import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class DeliveryChallan extends Component {
  render() {
    const customerid = this.props.fields.customerid;

    return (
      <div>
        <form>
          <fieldset>
            <label>Cutomer ID</label>
            <input {...customerid} name="customerid" />
            {customerid.touched && customerid.error &&
              <div className="error">{customerid.error}</div>}
          </fieldset>
        </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.customerid) {
    errors.customerid = 'Please enter an Customer Number';
  }

  return errors;
}

export default reduxForm({
  form: 'deliverychallan',
  fields: ['customerid'],
  validate
})(DeliveryChallan);

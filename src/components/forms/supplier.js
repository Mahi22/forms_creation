import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import Select from 'react-select';
import states from './indianstate';

import * as validations from './validations';

const bankAccountTypes = [
  {value: 'cash credit', label: 'Cash Credit'},
  {value: 'current', label: 'Current'},
  {value: 'savings', label: 'Savings'}
];


class SupplierForm extends Component {

  handleFormSubmit(formProps) {
    // Call action creator to create new Supplier!
    console.log(formProps);
    // this.props.submitForm(formProps, 'supplierCreate', this.props.onCloseModal);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="error">
          <strong>Oops !</strong> {this.props.errorMessage}
        </div>
      );
    }
    return null;
  }

  render() {
    const {fields: {accountNumber, accountType, address, bankBranch, distanceFromFactory, email,
      ifscCode, mobile, name, phoneNumber, pan, pincode,
      state, sugarcaneAvailabilityTon}, handleSubmit, resetForm, submitting} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="cf mv2 ph2 ph4-ns">
          <div className="fl w-100 w-50-l">
            <fieldset className="bn mb2 pa2">
              <label className="fw9 lh-copy o-70">FULL NAME</label>
              <input {...name} className="ba b--light-silver br1 f6 ph3 pv2 w-100"
                placeholder="Name of Supplier" type="text" />
                {name.touched && name.error && <div className="error">{name.error}</div>}
            </fieldset>
            <fieldset className="bn mb2 pa2">
              <label className="fw9 lh-copy o-70">EMAIL</label>
              <input {...email} className="ba b--light-silver br1 f6 ph3 pv2 w-100"
                placeholder="xyz@abc.com" type="email" />
                {email.touched && email.error && <div className="error">{email.error}</div>}
            </fieldset>

            <div className="cf">
              <div className="fl w-100 w-50-ns">
                <fieldset className="bn mb2 pa2">
                  <label className="fw9 lh-copy o-70">MOBILE NUMBER</label>
                  <input {...mobile} className="ba b--light-silver br1 f6 ph3 pv2 w-100"
                    maxLength="14" placeholder="+91 99999999" type="tel" />
                    {mobile.touched && mobile.error && <div className="error">{mobile.error}</div>}
                </fieldset>
              </div>
              <div className="fl w-100 w-50-ns">
                <fieldset className="bn mb2 pa2">
                  <label className="fw9 lh-copy o-70">PHONE NUMBER</label>
                  <input {...phoneNumber} className="ba b--light-silver br1 f6 ph3 pv2 w-100"
                    maxLength="14" placeholder="9999999999" type="tel" />
                    {phoneNumber.touched && phoneNumber.error && <div className="error">
                    {phoneNumber.error}</div>}
                </fieldset>
              </div>
            </div>

            <fieldset className="bn mb2 pa2">
              <label className="fw9 lh-copy o-70">ADDRESS</label>
              <textarea {...address} className="ba b--light-silver br1 f6 ph3 pv2 w-100"
                placeholder="Address of the supplier" rows="3" type="text" />
                {address.touched && address.error && <div className="error">{address.error}</div>}
            </fieldset>

            <fieldset className="bn mb2 pa2">
              <label className="fw9 lh-copy o-70">State</label>
              <Select onChange={param => state.onChange(param.value)}
                options={states} searchable={true}
                value={state.value} />
            </fieldset>


            <div className="cf">
              <div className="fl w-100 w-50-ns">
                <fieldset className="bn mb2 pa2">
                  <label className="fw9 lh-copy o-70">PIN CODE</label>
                  <input {...pincode} className="ba b--light-silver br1 f6 ph3 pv2 w-100"
                    placeholder="e.g. 411048" type="number" />
                    {pincode.touched && pincode.error && <div className="error">
                    {pincode.error}</div>}
                </fieldset>
              </div>
              <div className="fl w-100 w-50-ns">
                <fieldset className="bn mb2 pa2">
                  <label className="fw9 lh-copy o-70">DISTANCE FROM FACTORY</label>
                  <input {...distanceFromFactory}
                    className="ba b--light-silver br1 f6 ph3 pv2 w-100"
                    placeholder="Distance From Factory" />
                    {distanceFromFactory.touched &&
                      distanceFromFactory.error && <div className="error">
                    {distanceFromFactory.error}</div>}
                </fieldset>
              </div>
            </div>

          </div>
          <div className="fl w-100 w-50-l">
            <fieldset className="bn mb2 pa2">
              <label className="fw9 lh-copy o-70">PAN NUMBER</label>
              <input {...pan} className="ba b--light-silver br1 f6 ph3 pv2 w-100"
                maxLength="10" placeholder="e.g. CADMA0120K" type="text" />
                {pan.touched && pan.error && <div className="error">{pan.error}</div>}
            </fieldset>
            <fieldset className="bn mb2 pa2">
              <label className="fw9 lh-copy o-70">BANK - BRANCH DETAILS</label>
              <input {...bankBranch} className="ba b--light-silver br1 f6 ph3 pv2 w-100"
                placeholder="e.g. State Bank of India, Shikrapur" type="text" />
                {bankBranch.touched && bankBranch.error && <div className="error">
                {bankBranch.error}</div>}
            </fieldset>
            <fieldset className="bn mb2 pa2">
              <label className="fw9 lh-copy o-70">BANK - IFSC CODE</label>
              <input {...ifscCode} className="ba b--light-silver br1 f6 ph3 pv2 w-100"
                placeholder="e.g. SBI107SK" type="text" />
                {ifscCode.touched && ifscCode.error && <div className="error">
                {ifscCode.error}</div>}
            </fieldset>
            <fieldset className="bn mb2 pa2">
              <label className="fw9 lh-copy o-70">BANK - ACCOUNT NUMBER</label>
              <input {...accountNumber} className="ba b--light-silver br1 f6 ph3 pv2 w-100"
                placeholder="e.g. 1234AS232112" type="number" />
                {accountNumber.touched && accountNumber.error && <div className="error">
                {accountNumber.error}</div>}
            </fieldset>
            <fieldset className="bn mb2 pa2">
              <label className="fw9 lh-copy o-70">BANK - ACCOUNT TYPE</label>
              <Select onChange={param => accountType.onChange(param.value)}
                options={bankAccountTypes} searchable={false}
                value={accountType.value} />
                {accountType.touched && accountType.error && <div className="error">
                {accountType.error}</div>}
            </fieldset>
            <div className="cf mt2 mt4-l pa2">
              <div className="fr-l w-100 w-50-l">
                <button className="ba br1 f5 pv3 mr3-ns relative w-100 w-auto-ns"
                  disabled={submitting} onClick={resetForm}>Clear Values</button>

                <button className="bn br1 bg-green-90 f5 pv3 ph4-ns relative w-100 w-auto-ns white"
                  disabled={submitting} type="submit">{submitting ? 'Wait' : 'Save'} </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.accountNumber) {
    errors.accountNumber = 'Please enter an Account Number';
  }

  if (!formProps.accountType) {
    errors.accountType = 'Please enter an Account Type';
  }

  if (!formProps.address) {
    errors.address = 'Please enter Address';
  }

  if (!formProps.bankBranch) {
    errors.bankBranch = 'Please enter Bank/Branch Details';
  }

  errors.distanceFromFactory =
  validations.validateDistanceFromFactory(formProps.distanceFromFactory);

  errors.email = validations.validateEmail(formProps.email);

  // if (!formProps.ifscCode) {
  //   errors.ifscCode = 'Please enter IFSC Number';
  // }

  if (!formProps.name) {
    errors.name = 'Please enter a name';
  }

  errors.pan = validations.validatePanNumber(formProps.pan);

  errors.pincode = validations.validatePinCode(formProps.pincode);

  return errors;
}


SupplierForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'newSupplier',
  fields: ['accountNumber', 'accountType', 'address', 'bankBranch', 'distanceFromFactory', 'email',
          'ifscCode', 'mobile', 'name', 'pan', 'phoneNumber',
          'pincode', 'state', 'sugarcaneAvailabilityTon'],
  validate
})(SupplierForm);

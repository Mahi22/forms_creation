import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import * as conversions from './conversions';

function formNormailze() {
  return {
    newSupplier: {
      name: conversions.toTitleCase,
      ifscCode: value => value && value.toUpperCase(),
      mobile: conversions.normalizeMobile,
      pan: value => value && value.toUpperCase(),
      distanceFromFactory: conversions.restrictDistanceEntry
    }
  };
}

const rootReducer = combineReducers({
  form: form.normalize(formNormailze())
});

export default rootReducer;

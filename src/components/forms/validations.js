export function validateEmail(input) {
  if (!input) {
    return 'Please enter a email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input)) {
    return 'Invalid email address';
  }

  return null;
}

export function validatePanNumber(input) {
  if (!input) {
    return '';
  }
  if (!/^[A-Z]{3}[ABCFPHT][A-Z][0-9]{4}[A-Z]$/i.test(input)) {
    return 'Please enter a valide PAN detial';
  }
  return null;
}

export function validatePinCode(input) {
  if (!input) {
    return 'Please enter Pin Code Number';
  }
  if (!/^[0-9]{6}$/.test(input)) {
    return 'Please enter valid Pin Code Number';
  }
  return null;
}

export function validateDistanceFromFactory(input) {
  if (!input) {
    return 'Please enter Distance From Factory';
  }
  if (!/^[0-9]{3}.[0-9]{2}$/.test(input)) {
    return 'Please enter valid Distance';
  }
  return null;
}

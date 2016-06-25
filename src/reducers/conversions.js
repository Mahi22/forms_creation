export function normalizeMobile(value, previousValue) {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');

  if (!previousValue || value.length > previousValue.length) {
    if (onlyNums.length === 10 || onlyNums.length === 11) {
      return `+91 ${value}`;
    }
  } else if (value.length === 4 && value.match(/[+91]\s/)) {
    return '';
  }

  return value;
}

export function toTitleCase(str) {
  if (!str) {
    return str;
  } else if (/[A-Z]$/.test(str) || /[A-Z]\s$/.test(str)) {
    return str;
  }
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export function restrictDistanceEntry(value, previousValue) {
  if (!value) {
    return value;
  }
  // const onlyNums = value.replace(/[^\d]/g, '');

  return value;
}

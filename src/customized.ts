export const isStringArrayStringFiled = (key: string) => {
  if (process.env.STRING_ARRAY_STRING_REGULAR) {
    return RegExp(process.env.STRING_ARRAY_STRING_REGULAR).test(key);
  } else {
    return false;
  }
};

export const isNumberArrayStringFiled = (key: string) => {
  if (process.env.NUMBER_ARRAY_STRING_REGULAR) {
    return RegExp(process.env.NUMBER_ARRAY_STRING_REGULAR).test(key);
  } else {
    return false;
  }
};

export const geneFiledType = (name: string, type: string) => {
  if (isNumberArrayStringFiled(name)) {
    return `_type => [Number]`;
  }
  if (isStringArrayStringFiled(name)) {
    return `_type => [String]`;
  }
  return `_type => ${type}`;
};

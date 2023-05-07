interface Validate {
  (value: string | number): boolean;
}

interface Test {
  (validation: Validation, value: string | number): boolean;
}

interface Validation {
  required?: boolean | string;
  min?: {
    value: number;
    message: string;
  };
  max?: {
    value: number;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
}

export const formValidation = {
  id: {
    required: '필수 입력입니다.',
    minLength: {
      value: 5,
      message: '최소 5글자 이상 입력해주세요.'
    },
    maxLength: {
      value: 30,
      message: '30글자 이하로 입력해주세요.'
    },
    pattern: {
      value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g,
      message: '이메일 형식이 아닙니다.'
    }
  },

  nickname: {
    required: '필수 입력입니다.',
    minLength: {
      value: 2,
      message: '최소 2글자 이상 입력해주세요.'
    },
    maxLength: {
      value: 8,
      message: '8글자 이하로 입력해주세요.'
    },
    pattern: {
      value: /^[a-zA-Z0-9ㄱ-힣]{2,8}$/g,
      message: '[2-8글자] 공백없이 입력해주세요.'
    }
  },

  password: {
    required: '필수 입력입니다.',
    minLength: {
      value: 8,
      message: '최소 8글자 이상 입력해주세요.'
    },
    maxLength: {
      value: 16,
      message: '16글자 이하로 입력해주세요.'
    },
    pattern: {
      value: /^[^ㄱ-힣\s]{8,16}$/g,
      message: '[8-16글자] 공백 및 한글은 입력할 수 없습니다.'
    }
  },

  passwordChk: {
    required: '필수 입력입니다.',
    minLength: {
      value: 8,
      message: '최소 8글자 이상 입력해주세요.'
    },
    maxLength: {
      value: 16,
      message: '16글자 이하로 입력해주세요.'
    },
    pattern: {
      value: /^[^ㄱ-힣]{8,16}$/g,
      message: '[8-16글자\s] 공백 및 한글은 입력할 수 없습니다.'
    }
  }
}

export const validateId: Validate = (id) => {
  if (!testRequired(formValidation.id, id)) return false;
  if (!testMinLength(formValidation.id, id)) return false;
  if (!testMaxLength(formValidation.id, id)) return false;
  if (!testPattern(formValidation.id, id)) return false;
  return true;
};

export const validateNickname: Validate = (nickname) => {
  if (!testRequired(formValidation.nickname, nickname)) return false;
  if (!testMinLength(formValidation.nickname, nickname)) return false;
  if (!testMaxLength(formValidation.nickname, nickname)) return false;
  if (!testPattern(formValidation.nickname, nickname)) return false;
  return true;
};

export const validatePassword: Validate = (password) => {
  if (!testRequired(formValidation.password, password)) return false;
  if (!testMinLength(formValidation.password, password)) return false;
  if (!testMaxLength(formValidation.password, password)) return false;
  if (!testPattern(formValidation.password, password)) return false;
  return true;
};

const testRequired: Test = (validation, value) => {
  if (!hasOwnProperty(validation, 'required')) return true;
  return !!value;
};

const testMin: Test = (validation, value) => {
  if (!hasOwnProperty(validation, 'min') || typeof value !== 'number') return true;
  return (validation.min?.value || 0) <= value;
}

const testMax: Test = (validation, value) => {
  if (!hasOwnProperty(validation, 'max') || typeof value !== 'number') return true;
  return value <= (validation.max?.value || 0);
}

const testMinLength: Test = (validation, value) => {
  if (!hasOwnProperty(validation, 'minLength') || typeof value !== 'string') return true;
  return (validation.minLength?.value || -Infinity) <= value.length;
}

const testMaxLength: Test = (validation, value) => {
  if (!hasOwnProperty(validation, 'maxLength') || typeof value !== 'string') return true;
  return value.length <= (validation.maxLength?.value || Infinity);
}

const testPattern: Test = (validation, value) => {
  if (!hasOwnProperty(validation, 'pattern') || typeof value !== 'string') return true;
  return !!validation.pattern?.value.test(value);
}

const hasOwnProperty = (validation: Validation, prop: keyof Validation) => {
  return Object.prototype.hasOwnProperty.call(validation, prop);
}
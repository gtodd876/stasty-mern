import React from 'react';

import { validate, ValidatorType } from '../../util/validators';
import './Input.css';

export default function Input(props: Props) {
  const {
    label,
    id,
    type,
    elementType,
    placeholder,
    rows,
    errorText,
    validators,
    onInput,
  } = props;

  const [isTouched, setIsTouched] = React.useState(false);
  const [inputState, dispatch] = React.useReducer(inputReducer, {
    value: props.value || '',
    isValid: props.valid || false,
  });

  const { value, isValid } = inputState;

  React.useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: 'CHANGE',
      value: event.currentTarget.value,
      validators: validators,
    });
  };

  const handleTouch = () => {
    setIsTouched(true);
  };

  const element =
    elementType === 'input' ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        onBlur={handleTouch}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={handleOnChange}
        onBlur={handleTouch}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        isTouched && !inputState.isValid && 'form-control--invalid'
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {element}
      {!inputState.isValid && isTouched && <p>{errorText}</p>}
    </div>
  );
}

const inputReducer = (inputState: InputState, action: ActionType) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...inputState,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case 'TOUCH':
      return {
        ...inputState,
        isTouched: true,
      };
    default:
      return inputState;
  }
};

type Props = {
  label: string;
  id: string;
  type?: string;
  elementType: 'input' | 'textarea';
  placeholder?: string;
  rows?: number;
  errorText: string;
  validators: ValidatorType[];
  onInput: (id: string, value: string, isValid: boolean) => void;
  value?: string;
  valid?: boolean;
};

type ActionType = {
  type: string;
  value: string;
  validators: ValidatorType[];
};

type InputState = {
  value: string;
  isValid: boolean;
};

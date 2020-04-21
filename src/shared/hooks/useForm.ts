import React from 'react';

export function useForm(
  initialInputs: InitialInputsType,
  initialFormValidity: boolean
): [
  StateType,
  (id: string, value: string, isValid: boolean) => void,
  (inputData: any, formValidity: any) => void
] {
  const [formState, dispatch] = React.useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = React.useCallback(
    (id: string, value: string, isValid: boolean) => {
      dispatch({
        type: 'INPUT_CHANGE',
        value,
        isValid,
        inputId: id,
      });
    },
    []
  );

  const setFormData = React.useCallback((inputData, formValidity): void => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
}

const formReducer = (state: StateType, action: UseFormActionTypes) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        // if input key is not truthy then skip validation
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    case 'SET_DATA':
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };

    default:
      return state;
  }
};

// action types
const SET_DATA = 'SET_DATA';
const INPUT_CHANGE = 'INPUT_CHANGE';

// reducer state
type StateType = {
  inputs: {
    [key: string]: {
      value: string;
      isValid: boolean;
    };
  };
  isValid: boolean;
};

// initial inputs passed into custom useForm hook
type InitialInputsType = {
  [key: string]: {
    value: string;
    isValid: boolean;
  };
};

interface InputChangeAction {
  type: typeof INPUT_CHANGE;
  value: string;
  isValid: boolean;
  inputId: string;
}

interface SetDataAction {
  type: typeof SET_DATA;
  inputs: {
    [key: string]: {
      value: string;
      isValid: boolean;
    };
  };
  formIsValid: boolean;
}

type UseFormActionTypes = InputChangeAction | SetDataAction;

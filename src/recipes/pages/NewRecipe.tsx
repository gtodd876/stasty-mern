import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import './NewRecipe.css';

export default function NewRecipe() {
  const [formState, dispatch] = React.useReducer(formReducer, initialState);

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

  const handleRecipeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send this to the backend
    console.log(formState.inputs);
  };

  return (
    <form className="recipe-form" onSubmit={handleRecipeSubmit}>
      <Input
        elementType="input"
        type="text"
        label="Title"
        placeholder="title"
        id="title"
        errorText="Please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        elementType="textarea"
        label="Description"
        id="description"
        errorText="Please enter a valid description (at least 5 characters)"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD RECIPE
      </Button>
    </form>
  );
}

const formReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
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

    default:
      return state;
  }
};

const initialState = {
  inputs: {
    title: {
      value: '',
      isValid: false,
    },
    description: {
      value: '',
      isValid: false,
    },
  },
  isValid: false,
};

type StateType = {
  inputs: {
    [key: string]: {
      value: string;
      isValid: boolean;
    };
  };
  isValid: boolean;
};

type ActionType = {
  type: string;
  inputId: string;
  isValid: boolean;
  value: string;
};

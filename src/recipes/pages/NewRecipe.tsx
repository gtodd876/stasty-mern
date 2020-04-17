import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/useForm';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import './RecipeForm.css';

export default function NewRecipe() {
  const [formState, inputHandler] = useForm(initialState, false);

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

const initialState = {
  title: {
    value: '',
    isValid: false,
  },
  description: {
    value: '',
    isValid: false,
  },
};

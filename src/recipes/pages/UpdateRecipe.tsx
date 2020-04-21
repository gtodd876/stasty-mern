import React from 'react';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../types';

import { useForm } from '../../shared/hooks/useForm';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import './RecipeForm.css';

const DUMMY_RECIPES = [
  {
    id: 'r1',
    title: 'mini muffins',
    description: 'delicious sugary delights',
    imageUrl:
      'https://www.onceuponachef.com/images/2011/09/Doughnut-Muffins.jpg',
    creatorId: 'u1',
  },
  {
    id: 'r2',
    title: 'cookies',
    description: 'delicious baked delights',
    imageUrl:
      'https://i.etsystatic.com/13604074/r/il/dfcf2d/1739696597/il_794xN.1739696597_fdam.jpg',
    creatorId: 'u2',
  },
];

export default function UpdateRecipe() {
  const [isLoading, setIsLoading] = React.useState(true);

  const recipeId = useParams<RouteParams>().recipeId;

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

  const [formState, inputHandler, setFormData] = useForm(initialState, true);

  const identifiedRecipe = DUMMY_RECIPES.find(r => r.id === recipeId);

  React.useEffect(() => {
    if (identifiedRecipe) {
      setFormData(
        {
          title: {
            value: identifiedRecipe.title,
            isValid: true,
          },
          description: {
            value: identifiedRecipe.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedRecipe]);

  const handleReceiptUpdateSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedRecipe) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find recipe!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="recipe-form" onSubmit={handleReceiptUpdateSubmit}>
      <Input
        id="title"
        elementType="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        elementType="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
}

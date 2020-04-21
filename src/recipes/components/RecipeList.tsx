import React from 'react';

import RecipeItem from './RecipeItem';
import { Recipe } from '../../types';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import './RecipeList.css';

type Props = {
  items: Recipe[];
};

export default function RecipeList(props: Props) {
  if (props.items.length === 0) {
    return (
      <div className="recipe-list center">
        <Card>
          <h2>No recipes found. Maybe create one?</h2>
          <Button to="/recipes/new" type="button">
            Share recipe
          </Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="recipe-list">
      {props.items.map(recipe => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          imageUrl={recipe.imageUrl}
          title={recipe.title}
          description={recipe.description}
          creatorId={recipe.creatorId}
        />
      ))}
    </ul>
  );
}

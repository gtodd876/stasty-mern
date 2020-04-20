import React from 'react';
import { useParams } from 'react-router-dom';

import RecipeList from '../components/RecipeList';
import { RouteParams } from '../../types';

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

export default function UserRecipes() {
  const userId = useParams<RouteParams>().userId;
  const loadedRecipes = DUMMY_RECIPES.filter(r => r.creatorId === userId);

  return <RecipeList items={loadedRecipes} />;
}

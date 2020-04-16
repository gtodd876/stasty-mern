import React from 'react';
import UsersList from '../components/UserList';

export default function Users() {
  const USERS = [
    {
      id: 'u1',
      name: 'stacy',
      imageUrl:
        'https://images.pexels.com/photos/3584430/pexels-photo-3584430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      recipeCount: 3,
    },
    {
      id: 'u2',
      name: 'todd',
      imageUrl:
        'https://images.pexels.com/photos/3584430/pexels-photo-3584430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      recipeCount: 1,
    },
  ];
  return <UsersList items={USERS} />;
}

import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem';
import './UserList.css';
import { User } from '../../types';

type Props = {
  items: User[];
};

export default function UsersList(props: Props) {
  if (props.items.length <= 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem key={user.id} id={user.id} imageUrl={user.imageUrl} name={user.name} recipeCount={user.recipeCount} />
      ))}
    </ul>
  );
}

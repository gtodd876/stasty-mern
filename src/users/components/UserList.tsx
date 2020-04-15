import React from "react";

import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "./UserList.css";

interface IUserListProps {
  items: IUser[];
}

interface IUser {
  id: string;
  name: string;
  image: string;
  recipeCount: number;
}

export default function UsersList(props: IUserListProps) {
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
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          recipeCount={user.recipeCount}
        />
      ))}
    </ul>
  );
}

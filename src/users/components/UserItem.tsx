import React from "react";
import Avatar from '../../shared/components/UIElements/Avatar'
import "./UserItem.css";

interface IUserItemProps {
  key: string;
  id: string;
  image: string;
  name: string;
  recipeCount: number;
}
export default function UserItem(props: IUserItemProps) {
  return (
    <li className="user-item">
      <div className="user-item__image">
        <Avatar image={props.image} altText="user avatar"/>
      </div>
      <div className="user-item__info">
        <h2>{props.name}</h2>
        <h3>
          {props.recipeCount} {props.recipeCount === 1 ? "Recipe" : "Recipes"}
        </h3>
      </div>
    </li>
  );
}

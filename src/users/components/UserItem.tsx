import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";
import { Link } from "react-router-dom";

interface IUserItemProps {
  key: string;
  id: string;
  image: string;
  name: string;
  recipeCount: number;
}
export default function UserItem(props: IUserItemProps) {
  const { id, image, name, recipeCount } = props;

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/recipes`}>
          <div className="user-item__image">
            <Avatar image={image} altText="user avatar" />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {recipeCount} {recipeCount === 1 ? "Recipe" : "Recipes"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

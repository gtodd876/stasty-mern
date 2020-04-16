import React from 'react';

import { Recipe } from '../../types';
import Card from '../../shared/components/UIElements/Card';
import './RecipeItem.css';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

type Props = Recipe;

export default function RecipeItem(props: Props) {
  const { imageUrl, title, description } = props;
  const [showImageModal, setShowImageModal] = React.useState(false);

  return (
    <>
      <Modal
        show={showImageModal}
        onCancel={() => setShowImageModal(false)}
        header={title}
        contentClass="recipe-item__modal-content"
        footerClass="recipe-item__modal-actions"
        footer={
          <Button type="button" onClick={() => setShowImageModal(false)}>
            X
          </Button>
        }
      >
        <div className="image-container">
          <img src={imageUrl} className="recipe-item__image-fs" alt={title} />
        </div>
      </Modal>
      <li className="recipe-item">
        <Card className="recipe-item__content">
          <div className="recipe-item__image">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="recipe-item__info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="recipe-item__actions">
            <Button type="button" onClick={() => setShowImageModal(true)} inverse>
              VIEW IMAGE
            </Button>
            <Button type="button" to={`/places/${props.id}`}>
              EDIT
            </Button>
            <Button type="button" danger>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
}

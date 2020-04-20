import React from 'react';

import { Recipe } from '../../types';
import Card from '../../shared/components/UIElements/Card';
import './RecipeItem.css';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContext } from '../../shared/context/auth-context';

type Props = Recipe;

export default function RecipeItem(props: Props) {
  const authContext = React.useContext(AuthContext);
  const { imageUrl, title, description } = props;
  const [showImageModal, setShowImageModal] = React.useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);

  const handleConfirmDelete = () => {
    setShowConfirmModal(false);
    console.log('DELETING...');
  };

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
      <Modal
        show={showConfirmModal}
        onCancel={() => setShowConfirmModal(false)}
        header="Are you sure?"
        footerClass="recipe-item__modal-actions"
        footer={
          <>
            <Button
              inverse
              type="button"
              onClick={() => setShowConfirmModal(false)}
            >
              CANCEL
            </Button>
            <Button danger type="button" onClick={handleConfirmDelete}>
              DELETE
            </Button>
          </>
        }
      >
        <p>Do you really want to delete this recipe?</p>
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
            <Button
              type="button"
              onClick={() => setShowImageModal(true)}
              inverse
            >
              VIEW IMAGE
            </Button>
            {authContext.isLoggedIn && (
              <Button type="button" to={`/recipes/${props.id}`}>
                EDIT
              </Button>
            )}
            {authContext.isLoggedIn && (
              <Button
                type="button"
                danger
                onClick={() => setShowConfirmModal(true)}
              >
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
}

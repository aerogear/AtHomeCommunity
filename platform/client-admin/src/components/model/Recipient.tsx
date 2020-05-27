import React from 'react';
import {
  IonItem,
  IonButton,
  IonLabel,
  IonNote,
  IonIcon,
  IonButtons
} from '@ionic/react';
import { peopleCircleSharp, open } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { RecipientFieldsFragment } from '../../dataFacade';

export const Recipient: React.FC<{ recipient: RecipientFieldsFragment }> = ({ recipient }) => {

  return (
    <IonItem>
      <IonIcon icon={peopleCircleSharp} className='ion-margin-end ion-align-items-start' />
      <IonLabel>
        <h2>{recipient.firstName} {recipient.lastName}</h2>
        <IonNote item-start>
          {recipient.phone}
        </IonNote>
      </IonLabel>
      <IonButtons>

        <Link to={`manageRecipient/${recipient.id}`}>
          <IonButton item-start color='primary' fill="outline">
            <IonIcon icon={open} />
          </IonButton>
        </Link>

      </IonButtons>
    </IonItem >
  );

};

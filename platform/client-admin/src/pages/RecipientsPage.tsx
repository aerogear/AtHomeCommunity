import React from 'react';
import {
  IonPage,
  IonFooter,
  IonLoading,
  IonContent,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { Empty, Header } from '../components';
import { RouteComponentProps } from 'react-router';
import { useFindRecipientsQuery } from '../dataFacade';
import { RecipientList } from '../components/model/RecipientList';
import { Link } from 'react-router-dom';
import { open } from 'ionicons/icons';

export const RecipientsPage: React.FC<RouteComponentProps> = ({ match }) => {
  let { data, loading, error } = useFindRecipientsQuery();

  if (error) {
    console.log(error);
  }

  if (loading) return <IonLoading
    isOpen={loading}
    message={'Loading...'}
  />;

  let content;
  if (data?.findRecipients?.items.length !== 0) {
    content = <RecipientList recipients={data?.findRecipients.items as any} />
  } else {
    content = <Empty message={<p>No data!</p>} />;
  }


  return (
    <IonPage>
      <Header title="List of Recipients" match={match} />

      <IonContent className="ion-padding" >
        {content}
        <Link to={'createRecipient'}>
          <IonButton item-start color='primary' fill="outline">
            <IonIcon icon={open} />
              Create Recipient
          </IonButton>
        </Link>
      </IonContent>
      <IonFooter>
        <div>
          OpenVolunteer Platform
        </div>
      </IonFooter>
    </IonPage >
  );

};

import React, { Fragment } from 'react';

import { IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle
} from '@ionic/react';

const Header = ({ history }) => (
  <Fragment>
    <IonMenu side="start" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonMenuToggle>
          <IonItem onClick={() => history.push('/')}>Home</IonItem>
          <IonItem onClick={() => history.push('/dashboard')}>Dashboard</IonItem>
        </IonMenuToggle>
      </IonContent>
    </IonMenu>
  </Fragment>
);

export default Header;
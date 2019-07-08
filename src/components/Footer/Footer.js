import React, { Fragment } from 'react';

import { IonContent,
  IonFooter,
  IonToolbar,
  IonTitle
} from '@ionic/react';

const Footer = () => (
  <Fragment>
    <IonContent />

    <IonFooter>
      <IonToolbar>
        <IonTitle>Footer</IonTitle>
      </IonToolbar>
    </IonFooter>
  </Fragment>
);

export default Footer;
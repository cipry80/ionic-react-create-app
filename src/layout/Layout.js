import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// components
import Menu from '../components/Menu/Menu';

import { IonApp, IonPage } from '@ionic/react';

class Layout extends Component {
  static propTypes = {component: PropTypes.func.isRequired};

  render() {

    const {
      component: Component,
      ...props
    } = this.props;

    return (
      <Fragment>
        <IonApp>
            <Menu />
            <IonPage id="main">
            <Route
              {...props}
              render={matchProps => <Component {...matchProps} />}
            />
            </IonPage>
        </IonApp>
      </Fragment>
    )
  }
}

export default Layout;

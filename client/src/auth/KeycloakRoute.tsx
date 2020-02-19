import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { AppContext } from '../AppContext';
import { useNetworkStatus } from 'react-offix-hooks';

export const KeycloakRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const isOnline = useNetworkStatus();
  const { keycloak } = useContext(AppContext);

  // console.log(!(keycloak));

  // return (<h1>Hello</h1>);
  debugger;
  if (keycloak && !keycloak?.authenticated && isOnline) keycloak?.login();

  return (
    <Route
      {...rest}
      component={Component}
    />
  );
};

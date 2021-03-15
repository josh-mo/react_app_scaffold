import React from 'react';
import ReactDOM from 'react-dom';

const ClientContext = React.createContext();
const client = window.ZAFClient.init();

export function renderWithLocationComponent({ Component, entryPoint }) {
  return () => {
    client.on('app.registered', () => {
      ReactDOM.render(
        <ClientContext.Provider value={client}>
          <Component />
        </ClientContext.Provider>,
        document.getElementById(entryPoint)
      );
    });
  };
}

export function useClient() {
  const context = React.useContext(ClientContext);
  if (context === undefined) {
    throw new Error(`useClient must be used within a ClientProvider`);
  }
  return context;
}

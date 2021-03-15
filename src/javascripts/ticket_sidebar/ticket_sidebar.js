import * as React from 'react';

export const TicketSidebarContainer = ({ client }) => {
  const [userName, setUserName] = React.useState('');
  React.useEffect(() => {
    client.get('currentUser').then((user) => setUserName(user?.currentUser?.name));
  }, []);
  return <div>Hello {userName}</div>;
};

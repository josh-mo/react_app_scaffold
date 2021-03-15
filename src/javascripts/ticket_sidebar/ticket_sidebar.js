import * as React from 'react';
import { useClient } from '../lib/renderer';

function useUserName() {
  const client = useClient();
  const [userName, setUserName] = React.useState('');
  React.useEffect(() => {
    client.get('currentUser').then((user) => setUserName(user?.currentUser?.name));
  }, [client]);
  return userName;
}

export const TicketSidebarContainer = () => {
  const userName = useUserName();
  return <div>Hello {userName}</div>;
};


import React from 'react';
import FriendForm from './components/FriendForm';
import FriendList from './components/FriendList';
import GroupForm from './components/GroupForm';
import GroupList from './components/GroupList';
import RelationshipCoach from './components/RelationshipCoach';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Friend CRM</h1>
      <FriendForm onSave={() => window.location.reload()} />
      <FriendList />
      <hr />
      <GroupForm onSave={() => window.location.reload()} />
      <GroupList />
      <hr />
      <RelationshipCoach />
    </div>
  );
}

export default App;

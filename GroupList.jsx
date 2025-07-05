
import React, { useEffect, useState } from 'react';

export default function GroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch('/api/groups').then(res => res.json()).then(setGroups);
  }, []);

  return (
    <ul>
      {groups.map(group => (
        <li key={group._id}>
          <strong>{group.name}</strong> — {group.description}<br />
          Members: {group.members.map(m => m.name).join(', ')}
        </li>
      ))}
    </ul>
  );
}

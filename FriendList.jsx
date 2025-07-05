
import React, { useEffect, useState } from 'react';

export default function FriendList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('/api/friends').then(res => res.json()).then(setFriends);
  }, []);

  return (
    <ul>
      {friends.map(friend => (
        <li key={friend._id}>
          {friend.name} — {friend.birthday?.slice(0, 10)} ({friend.tags.join(', ')})
        </li>
      ))}
    </ul>
  );
}


import React, { useState, useEffect } from 'react';

export default function GroupForm({ onSave }) {
  const [form, setForm] = useState({ name: '', description: '', members: [] });
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('/api/friends').then(res => res.json()).then(setFriends);
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCheckbox = id => {
    setForm(prev => ({
      ...prev,
      members: prev.members.includes(id)
        ? prev.members.filter(m => m !== id)
        : [...prev.members, id]
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
    setForm({ name: '', description: '', members: [] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} placeholder="Group Name" onChange={handleChange} />
      <textarea name="description" value={form.description} placeholder="Description" onChange={handleChange} />
      <fieldset>
        <legend>Select Members</legend>
        {friends.map(friend => (
          <label key={friend._id}>
            <input
              type="checkbox"
              checked={form.members.includes(friend._id)}
              onChange={() => handleCheckbox(friend._id)}
            />
            {friend.name}
          </label>
        ))}
      </fieldset>
      <button type="submit">Create Group</button>
    </form>
  );
}

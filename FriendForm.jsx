
import React, { useState } from 'react';

export default function FriendForm({ onSave }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', birthday: '', tags: '', notes: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ ...formData, tags: formData.tags.split(',').map(tag => tag.trim()) });
    setFormData({ name: '', email: '', phone: '', birthday: '', tags: '', notes: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input name="birthday" type="date" value={formData.birthday} onChange={handleChange} />
      <input name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} />
      <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />
      <button type="submit">Save Friend</button>
    </form>
  );
}

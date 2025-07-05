
import React, { useEffect, useState } from 'react';

export default function RelationshipCoach() {
  const [suggestions, setSuggestions] = useState('');

  useEffect(() => {
    fetch('/api/ai/recommend')
      .then(res => res.json())
      .then(data => setSuggestions(data.suggestions));
  }, []);

  return (
    <div>
      <h2>AI Relationship Coach</h2>
      <pre>{suggestions}</pre>
    </div>
  );
}

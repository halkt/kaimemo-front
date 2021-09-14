import { useState } from 'react'

export default function Input({ type, onAdd }) {
  const [name, setText] = useState('');
  const handleChange = e => setText(e.target.value);
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      onAdd(name, type);
      setText('');
    }
  };

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="Enter to add"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

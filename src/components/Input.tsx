import { useState } from 'react'

export default function Input({ type, onAdd }) {
  const [name, setText] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAdd(name, type)
      setText('')
    }
  }

  return (
    <input
      className='input'
      type='text'
      placeholder='Enter to add'
      value={name}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

import { useState } from 'react'

export default function TypeInput({ addNewType }) {
  const [typeName, setTypeName] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTypeName(event.target.value)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addNewType(typeName)
      setTypeName('')
    }
  }

  return (
    <input
      className='input'
      type='text'
      placeholder='新しい項目を追加します'
      value={typeName}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

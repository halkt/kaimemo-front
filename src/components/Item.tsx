import { useState } from 'react'
import { Button, Container } from '@mui/material'
import styles from '../styles/List.module.css'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#__next')

const customStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '40%',
  },
}

export default function Item({ item, type, onCheck, onInput }) {
  const [formData, setFormData] = useState(Object.assign({}, item))
  const handleCheck = () => {
    onCheck(item, type)
  }
  const handleInputName = (event: any) => {
    formData.name = event.currentTarget.value
    setFormData(formData)
  }
  const handleInputIcon = (event: any) => {
    formData.icon = event.currentTarget.value
    setFormData(formData)
  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    item.name = formData.name
    item.icon = formData.icon
    onInput(item, type)
    setEditModalIsOpen(false)
  }
  const openModal = () => {
    setEditModalIsOpen(true)
  }
  const closeModal = () => {
    setEditModalIsOpen(false)
  }

  const [editModalIsOpen, setEditModalIsOpen] = useState(false)

  return (
    <div className={styles.card}>
      <label>
        <input type='checkbox' checked={item.purchased} onChange={handleCheck} />
        <span className={item.purchased ? 'done-item' : ''}>{item.name}</span>
        <span>{item.icon}</span>
      </label>
      <span className={styles.editIcon} onClick={openModal}>
        ✏️
      </span>
      <ReactModal isOpen={editModalIsOpen} style={customStyles}>
        <form onSubmit={handleSubmit}>
          <div>
            <span>名称</span>
            <input type='text' defaultValue={item.name} onInput={handleInputName} />
          </div>
          <div>
            <span>アイコン</span>
            <input type='text' defaultValue={item.icon} onInput={handleInputIcon} />
          </div>
          <div>
            <Button type='submit' variant='contained' color='primary'>
              change
            </Button>
            <Button variant='contained' color='primary' onClick={closeModal}>
              close
            </Button>
          </div>
        </form>
      </ReactModal>
    </div>
  )
}

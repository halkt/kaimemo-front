import { useState } from 'react'
import { Button, Container } from '@mui/material'
import styles from '../styles/List.module.css'
import Modal from 'react-modal'

Modal.setAppElement('#__next')

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

  const handleInput = (event: any) => {
    formData.name = event.target.value
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
      <Modal isOpen={editModalIsOpen} style={customStyles}>
        <form onSubmit={handleSubmit}>
          <input type='text' defaultValue={item.name} onInput={handleInput} />
          <input type='text' defaultValue={item.icon} />
          <Button type='submit' variant='contained' color='primary'>
            change
          </Button>
          <Button variant='contained' color='primary' onClick={closeModal}>
            close
          </Button>
        </form>
      </Modal>
    </div>
  )
}

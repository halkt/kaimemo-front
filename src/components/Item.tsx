import { BlockList } from 'net'
import { useState } from 'react'
import { Button, Container } from '@mui/material'
import styles from '../styles/List.module.css'
import Modal from 'react-modal'

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
  const handleCheck = () => {
    // onCheck(item, type);
    setEditModalIsOpen(true)
  }
  const handleInput = (event: any) => {
    item.name = event.target.value
    onInput(item, type)
  }

  const closeModal = () => {
    setEditModalIsOpen(false)
  }

  const [editModalIsOpen, setEditModalIsOpen] = useState(false)

  return (
    <label className={styles.card}>
      <input type='checkbox' checked={item.purchased} onChange={handleCheck} />
      <span className={item.purchased ? 'done-item' : ''}>{item.name}</span>
      <span>{item.icon}</span>
      <Modal isOpen={editModalIsOpen} style={customStyles}>
        <input
          className={item.purchased ? 'done-item' : ''}
          type='text'
          defaultValue={item.name}
          onInput={handleInput}
        />
        {/* {TODO: あとで足す} */}
        <Button variant='contained' color='primary' onClick={handleCheck}>
          change
        </Button>
        <Button variant='contained' color='primary' onClick={closeModal}>
          close
        </Button>
      </Modal>
    </label>
  )
}

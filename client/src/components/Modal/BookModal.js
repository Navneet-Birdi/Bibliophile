import React, { useEffect, useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { useMutation } from '@apollo/client';
import { ADD_BOOK } from '../../utils/mutations';

function BookModal({
    open,
    setOpen,
    bookName,
    coverImg,
    description
}) {
    const [saveBook, { error, data }] = useMutation(ADD_BOOK);
    const [success, setSuccess] = useState(false)


    const onBookSave =async () => {
        const {data } = await saveBook({variables: {
            title: bookName,
            image: coverImg,
            description
        }})
        if (data.saveBookToUser) {
            setSuccess(true)
        }
    }
  

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>{bookName}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={coverImg} wrapped />
        <Modal.Description>
            {success && <p>Your book was saved</p>}
          <Header>Description</Header>
          <p>
        {description}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Save"
          labelPosition='right'
          icon='checkmark'
          onClick={onBookSave}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default BookModal
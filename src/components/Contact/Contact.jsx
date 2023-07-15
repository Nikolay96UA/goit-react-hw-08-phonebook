import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';
import css from './Contact.module.css'

const Contact = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContactThunk(id));

  return (<>
              <p>
                <span className={css.accent}> Name:</span> {name}
              </p>
              <p>
                {' '}
                <span className={css.accent}> Number:</span> {number}
              </p>
              <button
                className={css.dltBtn}
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
              </>
  );
};

export default Contact;

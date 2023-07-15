import { useEffect } from 'react';

import css from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, getContactsThunk } from 'redux/contacts/Thunk';
import {
  selectContacts,
  selectError,
  selectFilterValue,
  selectIsLoading,
} from 'redux/contacts/selectors';

import { Loader } from 'components/Loader/Loader';

export default function ContactList() {
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const Error = useSelector(selectError);

  const filterValue = useSelector(selectFilterValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  // Варіант без зсуву контактів при завантаженні

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading) {
    return (
      <ul className={css.contacts}>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id}>
              <p>
                <span className={css.accent}> Name:</span> {contact.name}
              </p>
              <p>
                {' '}
                <span className={css.accent}> Number:</span> {contact.number}
              </p>
              <button
                className={css.dltBtn}
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  if (Error) {
    return <p>Error</p>;
  }

  // return (
  //   <>
  //     ({isLoading && <Loader />}
  //     {items && (
  //       <ul className={css.contacts}>
  //         {filteredContacts.map(contact => {
  //           return (
  //             <li key={contact.id}>
  //               <p>
  //                 <span className={css.accent}> Name:</span> {contact.name}
  //               </p>
  //               <p>
  //                 {' '}
  //                 <span className={css.accent}> Number:</span> {contact.number}
  //               </p>
  //               <button
  //                 className={css.dltBtn}
  //                 onClick={() => handleDeleteContact(contact.id)}
  //               >
  //                 Delete
  //               </button>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     )}
  //     {Error && <p>{Error}</p>})
  //   </>
  // );
}

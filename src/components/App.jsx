import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from '../components/App.module.css';

export default function App() {
  return (
    <div className={css.page}>
      <div>
        <h1 className={css.titlePage}>PhoneBook</h1>
        <ContactForm />
      </div>
      <div>
        <h2 className={css.titleContacts}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

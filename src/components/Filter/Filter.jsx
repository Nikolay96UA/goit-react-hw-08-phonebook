import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';
import {  selectFilterValue } from 'redux/contacts/selectors';

export default function Filter() {
  const  filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilterValue(event.target.value));
  };

  return (
    <label className={css.search}>
      <span className={css.searchName}>Find contacts by name</span>
      <input
      className={css.searchInp}
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </label>
  );
}


